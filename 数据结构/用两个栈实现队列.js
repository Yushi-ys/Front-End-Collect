// 输入：
// ["CQueue","appendTail","deleteHead","deleteHead","deleteHead"]
// [[],[3],[],[],[]]
// 输出：[null,null,3,-1,-1]

// 输入：
// ["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
// [[],[],[5],[2],[],[]]
// 输出：[null,-1,null,null,5,2]

// 每次 deleteHead 时，若输出栈为空, 则将输入栈的全部数据依次弹出并压入输出栈，这样输出栈从栈顶往栈底的顺序就是队列从队首往队尾的顺序
class CQueue {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }
  appendTail(value) {
    this.inStack.push(value);
  }
  deleteHead(value) {
    if (!this.outStack.length) {
      if (!this.outStack.length) return -1;
      this.inToOut();
    }
    return this.outStack.pop();
  }
  inToOut() {
    while (this.outStack.length) this.outStack.push(this.inStack.pop());
  }
}
