class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }
  // 内部类
  Node = class {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  };

  // 链表长度
  size() {
    return this.length;
  }

  // 判空
  isEmpty() {
    return this.length === 0;
  }

  // 添加
  append(data) {
    const node = new this.Node(data);
    if (!this.length) this.head = node;
    else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.length++;
  }

  // 插入
  insert(index, data) {
    if (index < 0 || index > this.length) return;
    const node = new this.Node(data);
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let pos = 0;
      let prev = null;
      let curr = this.head;
      while (pos++ < index) {
        prev = curr;
        curr = curr.next;
      }
      node.next = curr;
      prev.next = node;
    }
    this.length++;
  }

  // 修改
  update(index, data) {
    if (index < 0 || index > this.length) return;
    let pos = 0;
    let curr = this.head;
    while (pos++ < index) {
      curr = curr.next;
    }
    curr.data = data;
  }

  // 删除
  removeAt(index) {
    if (index < 0 || index > this.length) return;
    let pos = 0;
    let prev = null;
    let curr = this.head;
    if (index === 0) {
      this.head = this.head.next;
    } else {
      while (pos++ < index) {
        prev = curr;
        curr = curr.next;
      }
      prev.next = curr.next;
    }
    this.length--;
  }

  找到第一个满足条件的点;
  indexOf(data) {
    let curr = this.head;
    let pos = 0;
    while (curr) {
      if (curr.data === data) return pos;
      curr = curr.next;
      pos++;
    }
    return -1;
  }

  // 仅测试用，打印所有链表节点
  log() {
    let curr = this.head;
    let pos = 0;
    let str = "";
    while (curr) {
      str += curr.data + " ";
      curr = curr.next;
    }
    console.log(str);
  }
}