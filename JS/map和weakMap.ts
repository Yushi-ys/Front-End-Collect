const map = new Map();
const weakMap = new WeakMap();

// 自执行函数
(() => {
  const foo = { foo: 1 };
  const bar = { bar: 1 };
  map.set(foo, 1);
  weakMap.set(bar, 1);
})();

const iterator = map.keys();
console.log(iterator.next().value);
// 可以发现, 自执行函数走完之后, 仍然可以打印 map 的 key 值, 他的引用还存在, 那么js的垃圾回收器不会将其从内存中移除

console.log(weakMap); // WeakMap { <items unknown> }
// 首先 weakMap 的 key 必须是一个对象
// weakMap 对 key 是弱引用的, 不影响垃圾回收器的工作。由于 WeakMap 保存对键的弱引用, 且无法枚举, 因此无法使用 keys()、values()、entries() 这些方法
// 使用场景: 那些只有当 key 所引用的对象存在时才有价值的信息

// Vue3使用到了 https://github.com/vuejs/core/blob/main/packages/reactivity/src/reactive.ts 第186行
export const enum ReactiveFlags {
  SKIP = "__v_skip",
  IS_REACTIVE = "__v_isReactive",
  IS_READONLY = "__v_isReadonly",
  IS_SHALLOW = "__v_isShallow",
  RAW = "__v_raw",
}
export interface Target {
  [ReactiveFlags.SKIP]?: boolean;
  [ReactiveFlags.IS_REACTIVE]?: boolean;
  [ReactiveFlags.IS_READONLY]?: boolean;
  [ReactiveFlags.IS_SHALLOW]?: boolean;
  [ReactiveFlags.RAW]?: any;
}
function createReactiveObject(
  target: Target,
  isReadonly: boolean,
  baseHandlers: ProxyHandler<any>,
  collectionHandlers: ProxyHandler<any>,
  proxyMap: WeakMap<Target, any>
) {
  // ...
}

// 这里的 key(Target) 其实就是我们要代理的这个对象
// 这个对象如果在我们写的时候已经使用完了, 正常应该需要被垃圾回收器给回收的, 所以使用 weakMap, 算是性能的一个优化
