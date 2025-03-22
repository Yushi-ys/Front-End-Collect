为什么用 ResizeObserver
A：用 ResizeObserver 主要是因为它能很方便地监听元素尺寸的变化，比如高度或宽度。以前我们可能会用 window.resize 或者手动计算元素尺寸，但这些方法要么不够精准，要么性能开销比较大

和传统方法比有什么优势？
A：传统方法比如 window.resize 或者 getBoundingClientRect()，有几个问题：

1. 不够精准：window.resize 是监听整个窗口的变化，而我只需要监听某个元素的变化，用它会浪费性能。
2. 手动计算麻烦：如果用 getBoundingClientRect()，我得自己写逻辑去判断什么时候该重新计算，代码会变得很复杂。
3. 性能问题：频繁调用 getBoundingClientRect() 可能会导致页面卡顿，因为它会强制触发重排。

而 ResizeObserver 直接解决了这些问题：
1. 它只监听我需要的元素，精准又高效。
2. 动态内容变化时，它能自动触发回调，不用我手动干预。
3. 性能更好，不会频繁触发重排。