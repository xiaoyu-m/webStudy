/**
 * 1. 什么是函数
 *   拥有特定功能的n条语句封装替
 *   只有函数可以执行，其他类型不能执行
 *   提高代码复用
 * 2. 为什么要用对象
 *
 * 3. 对象的组成
 *
 *
 * 4. 对象内部数据的访问
 *
 *
 * * **/
/*
      {
        // 年龄阶段
        let age = 11;
        console.log(showInfo(age));
        function showInfo(age) {
          if (age < 18) {
            return "未成年";
          }
          if (age < 60) {
            return "小年轻";
          }
          if (age > 60) {
            return "老年人";
          }
        }
      }
      */

// 命名空间
/*
    {
      // 将同类型的数据或者方法归类为一个对象，避免重复编写命名冲突代码
      let _Math = {
        // 求平方
        square: function (x) {
          return x * x;
        },
        // 求平均值，参数为数组
        avg: function (arr) {
          let sum = 0;
          for (const arrElement of arr) {
            sum += arrElement;
          }
          return sum / arr.length;
        },
      };
      console.log(_Math.square(5));
      console.log(_Math.avg([1, 2, 3, 4, 5]));
    }
    */

// 字符串方法
/*
    {
      let str = "xiaoyu";
      // 截取数字小数个数
      console.log((123.45677).toFixed(2));

      // 字符串属性:字符串长度
      console.log(str.length);

      // 截取字符串中的字符，通过下标
      console.log(str.charAt(2));
    }
    */

// JSON,
/*
    {
      let obj = {
        name: 1,
      };
      console.log(JSON.stringify(obj));
    }
    */

/*{
      let _random = "",
        temp = "";
      while (_random.length < 4) {
        temp = String(parseInt(Math.random() * 10));
        if (_random.indexOf(temp) === -1) {
          _random += temp;
        }
      }
      console.log(_random, _random.length);
    }*/

// 时间转换
{
  console.log(getTime());
  // 时间戳转换时间
  function getTime() {
    // let _date = new Date(timeNum);
    let _date = new Date();
    let year = _date.getFullYear();
    let mouth = _date.getMonth() + 1;
    let day = _date.getDate();
    let hour = _date.getHours();
    let minute = _date.getMinutes();
    let second = _date.getSeconds();
    return `${year}年${mouth}月${day} ${hour}:${minute}:${second}`;
  }
}
