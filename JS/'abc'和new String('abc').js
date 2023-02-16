let a = 'abc'; //原始类型
let b = new String('abc'); //引用类型

console.log(a instanceof String); // false
//存储在栈（stack）中的简单数据段,它们的值直接存储在变量访问的位置

console.log(b instanceof String); //true
//存储在堆（heap）中的对象,存储在变量处的值是一个指针（point），指向存储对象的内存地址

// a.length实质上 => new String(a).length

/*
原始数据类型直接存储在栈（stack）中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储；

引用数据类型存储在堆（heap）中的对象，占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体
*/