// 对比于观察者模式，观察者和目标要相互知道
// 发布者和订阅者不用相互知道，通过第三方实现调度，属于经过解耦合的观察者模式

class EventEmitter {
  constructor() {
    // key: 事件名
    // value: callback [] 回调数组
    this.events = {};
  }

  on(name, cb) {
    if (!this.events[name]) this.events[name] = [cb];
    else this.events[name].push(cb);
  }

  off(name, cb) {
    if (!this.message[name]) return;
    if (!cb) {
      // 如果没有cb,就删掉整个事件
      this.message[name] = undefined;
    }
    this.message[name] = this.message[name].filter((item) => item !== cb);
  }

  emit(name, ...args) {
    if (!this.events[name]) return;
    this.events[name].forEach((cb) => cb(...args));
  }
}
