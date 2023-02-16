const a = 1;
a = 2;
///Assignment to constant variable


const b;
//Missing initializer in const declaration

{
    const c = 1;
}
console.log(c); //c is not defined

// 1、 值不可被改变
// 2、 一定要赋初值
// 3、 块级作用域