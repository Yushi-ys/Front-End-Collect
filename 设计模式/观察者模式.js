// 当一个对象改变，让所有依赖他的对象都接收到改变
class SubObj {
  constructor() {
    this.observers = [];
  }

  // 添加观察者
  addObserver(observer) {
    this.observers.push(observer);
  }

  // 通知观察者
  notify() {
    this.observers.forEach((item) => {
      item.update();
    });
  }

  // 移除观察者
  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }
}

class Observer {
  update() {
    console.log(this);
  }
}

const subobj = new SubObj();
const observer = new Observer();

subobj.addObserver(observer);
subobj.notify();
