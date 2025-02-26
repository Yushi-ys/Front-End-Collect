区别：
1. type 更灵活，适合定义复杂类型
2. interface 更适合定义对象形状，尤其是需要扩展或实现的时候
3. 实际开发中，两者可以混用，看团队习惯


1. 基本功能
- type: 是一个类型别名，可以用来给任何类型起别名
```ts
type Name = string;
type Age = number;
type Person = { name: Name; age: Age };
```
<b>可以把 type 理解成一个“快捷方式”，用来简化复杂的类型定义</b>

- interface: 专门用来定义对象的形状
```ts
interface Person {
  name: string;
  age: number;
}
```
<b>interface 更像是一个“合同”，规定了对象必须有哪些属性和方法</b>

2. 拓展方式
- type 使用 & 来拓展(交叉类型)
```js
type Animal = { name: string };
type Dog = Animal & { bark(): void };
```

- interface 用 extends 来扩展
```ts
interface Animal {
  name: string;
}

interface Dog extends Animal {
  bark(): void;
}
```

3. 合并能力
- type 不能重复定义。如果你用 type 定义两个同名类型，会报错
```ts
type Person = { name: string };
type Person = { age: number }; // 报错：Duplicate identifier 'Person'
```

- interface 可以重复定义，TypeScript 会自动合并
```ts
interface Person {
  name: string;
}
interface Person {
  age: number;
}
const person: Person = { name: 'Jack', age: 20 }; // 合法
```

4. 使用场景
- type 适合定义复杂的类型，比如联合类型、交叉类型、数组等
```ts
type ID = string | number;
type Point = [number, number];
```

- interface 适合定义对象的形状，尤其是当你需要扩展或实现（implements）的时候
```ts
interface Animal {
  name: string;
}
class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
```