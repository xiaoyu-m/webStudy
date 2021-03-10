/**
 * 1. 什么是对象
 *   保存多个不同属性的数据容器
 *  一个对象代表显示对象中的一个事物
 * 2. 为什么要用对象
 *  统一管理多个数据
 * 3. 对象的组成
 *  属性 属性名(字符串)和属性值(任意类型)组成
 *  方法：一种特殊的属性,属性值位函数
 * 4. 对象内部数据的访问
 *  对象.属性名 *
 *  对象[属性名字符串]  写法麻烦，但是通用
 **/

/**
 * 什么时候使用['属性名']方式？
 *  p.content-type = 'text/json" 时
 *  变量名不确定时
 *  属性名是数字的时候
 **/
/*{
  let obj1 = { name: "xiaoyu", age: Symbol(1) };
  let obj2 = { name: "xiaoyu", age: Symbol(1) };
  console.log(obj1["age"] == obj2["age"]);
  console.log(obj1["age"], obj2["age"]);
}*/
/*{
  let arr = [
    1,
    2,
    function () {
      console.log(this);
    },
  ];
  let obj = {
    a: 222221,
    test: function () {
      console.log(this.a);
    },
  };
  obj.test();
  arr[2]();
  this.b = "b";

  function test() {
    this.c = () => {
      console.log(this);
    };
  }
  let Test = new test();
  Test.c();
}*/
