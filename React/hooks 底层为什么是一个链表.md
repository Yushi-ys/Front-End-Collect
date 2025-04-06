#### 主要是为了解决 Hooks 在函数组件中保持状态和顺序的问题

1. 函数组件本身是一个纯函数，自身是无状态的，每次渲染都会重新执行整个函数，例如这样
```js
function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Alice"); 
  // 如何确保两次渲染间 count 和 name 不被混淆？
  // 如何保证每次 count 被修改之后值能被记住
}
```
所以必须有一种数据结构可以用来跟踪和管理 Hooks 的调用顺序和状态，采用链表

#### 组件渲染时的流程
1. 首次渲染，React 按顺序将 Hooks 的调用转化为链表节点，并保存它们的 memoizedState和next
2. 后续渲染，React 会遍历链表，按顺序取出每个 Hook 节点，更新或读取状态
3. 更新时，如果 Hook 状态变化（如调用 setState），React 通过链表找到对应节点，更新 memoizedState 并触发重新渲染

#### 为什么hooks必须在函数的顶层定义并且不能卸载判断语句里面
还是因为底层是链表的原因，如果这么写
```js
function BrokenExample() {
  if (condition) {
    const [count, setCount] = useState(0); // 可能有时调用，有时不调用
  }
  const [name, setName] = useState("");    // 后续 Hook 的顺序可能错位
}
```
有可能会这样，如果 condition 第一次是 true，第二次是 false，那么
1. Hook1 (count) → Hook2 (name) → null
2. Hook1 (name) → null
name 错误地关联到了 count 的链表节点，导致状态混乱

至于为什么要写在顶层，因为函数组件每次渲染时，React 会从头到尾执行整个函数，只有所有 Hooks 每次渲染都被无条件执行，才能确保它们的调用顺序完全一致，所以必须写在顶部

#### 为什么不可以用数组
链表可有动态分配内存，因为如果有自定义hooks，当中可以涉及其他hooks，链表可以很好的插入，但是数组在分配的时候就已经分配好内存了