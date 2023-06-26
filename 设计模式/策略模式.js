// 避免在有多种算法相似的情况下，使用 if...else 所带来的复杂和难以维护

class Strategies {}
class Add extends Strategies {
  start(num) {
    return num + num;
  }
}
class Multiply extends Strategies {
  start(num) {
    return num * num;
  }
}
class Context {
  constructor(strategy) {
    this.strategy = strategy;
  }
  start(num) {
    return this.strategy.start(num);
  }
}
let context = new Context(new Add());
console.log(context.start(3));
context = new Context(new Multiply());
console.log(context.start(3));
