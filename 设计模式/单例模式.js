// 保证一个类仅有一个实例，并提供一个访问它的全局访问点
// 主要解决一个全局使用的类频繁的创建和销毁，占用内存

class Single {
  constructor(name, age) {
    if (!Single.instance) {
      this.name = name;
      this.age = age;
      Single.instance = this;
      console.log(this);
    }
    return Single.instance;
  }
}

new Single("淘宝", 18);
new Single("百度", 19);
