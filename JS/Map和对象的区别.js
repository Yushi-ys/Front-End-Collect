// 1.对象的key只能是字符串或Symbol，Map的key可以为任何类型

// 2.创建方式不同，对象可以通过字面量创建、new Object、Object.create来创建，Map则是通过构造函数创造

// 3.对键的遍历的时候，Map会根据key的插入顺序去遍历，对象的话输出则是无序的(数字先，其次字符，按照ascll码顺序来排序)

// 4.Map内置了很多属性和方法

// 5.Map内置迭代器，可以通过forEach、for of、for in等方法遍历，但是Object不可以，可以通过entries、Object.keys来遍历

// 6.Map在频繁增删键值的情况下表现更好，时间复杂度为O(1)