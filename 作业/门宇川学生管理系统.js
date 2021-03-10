const { question } = require("readline-sync");
let stuInfo = [
  [
    {
      stuID: "1",
      stuName: "bdy",
      stuAge: "18",
      stuGender: "male",
      stuScore: "100",
      className: "1班",
    },
    {
      stuID: "2",
      stuName: "luc",
      stuAge: "23",
      stuGender: "female",
      stuScore: "89",
      className: "1班",
    },
    {
      stuID: "3",
      stuName: "lc",
      stuAge: "17",
      stuGender: "male",
      stuScore: "93",
      className: "1班",
    },
    {
      stuID: "4",
      stuName: "xu",
      stuAge: "19",
      stuGender: "female",
      stuScore: "91",
      className: "1班",
    },
    {
      stuID: "5",
      stuName: "chao",
      stuAge: "20",
      stuGender: "male",
      stuScore: "95",
      className: "1班",
    },
  ],
  [
    {
      stuID: "1",
      stuName: "wf",
      stuAge: "18",
      stuGender: "female",
      stuScore: "85",
      className: "2班",
    },
    {
      stuID: "2",
      stuName: "xtf",
      stuAge: "19",
      stuGender: "female",
      stuScore: "91",
      className: "2班",
    },
    {
      stuID: "3",
      stuName: "xj",
      stuAge: "19",
      stuGender: "male",
      stuScore: "92",
      className: "2班",
    },
    {
      stuID: "4",
      stuName: "ls",
      stuAge: "21",
      stuGender: "male",
      stuScore: "94",
      className: "2班",
    },
    {
      stuID: "5",
      stuName: "xjs",
      stuAge: "22",
      stuGender: "female",
      stuScore: "89",
      className: "2班",
    },
  ],
  [
    {
      stuID: "1",
      stuName: "yaj",
      stuAge: "22",
      stuGender: "male",
      stuScore: "86",
      className: "3班",
    },
    {
      stuID: "2",
      stuName: "xj",
      stuAge: "25",
      stuGender: "female",
      stuScore: "89",
      className: "3班",
    },
    {
      stuID: "3",
      stuName: "xiz",
      stuAge: "24",
      stuGender: "female",
      stuScore: "80",
      className: "3班",
    },
    {
      stuID: "4",
      stuName: "yhq",
      stuAge: "26",
      stuGender: "female",
      stuScore: "92",
      className: "3班",
    },
    {
      stuID: "5",
      stuName: "npa",
      stuAge: "19",
      stuGender: "male",
      stuScore: "96",
      className: "3班",
    },
  ],
];
let keys = ["编号", "姓名", "年龄", "性别", "成绩", "班级"];
function main() {
  let count = 0;
  let admin = {
    username: "admin",
    password: "xiaoyu",
  };
  console.log("欢迎登录学生管理系统，请输入账号进入~");

  while (count < 3) {
    console.log("请输入账号：");
    const username = question("");
    if (username === admin.username) {
      console.log("请输入密码：");
      const password = question("");
      if (password === admin.password) {
        Students();
        count = 3;
      } else {
        count++;
        console.log(
          3 - count
            ? `密码错误，您还剩下${3 - count}次机会:`
            : "您尝试的次数已过多，请几分钟后重试！"
        );
      }
    } else {
      count++;
      console.log(
        3 - count
          ? `账号错误，您还剩下${3 - count}次机会:`
          : "您尝试的次数已过多，请几分钟后重试！"
      );
    }
  }
}
function Students() {
  let stuflag = true;
  while (stuflag) {
    console.clear();
    console.log(
      "恭喜您已进入学生管理系统，请选择功能：1.查询   2.修改   3.增加   4.删除   5.转班   6.退出"
    );
    let stuchiose = question() * 1;
    let result = []; // 存放操作的结果
    let chiose = 0;
    console.clear();
    switch (stuchiose) {
      case 1:
        console.log("请选择查询条件：1. 班级查询   2.学生查询   3.返回");
        chiose = question("") * 1;
        result = findStu(chiose, "stuName");
        if (result.findstate) {
          result = result.result;
          console.table(result);
        }
        console.log("查询完成 ，按回车返回");
        result = [];
        break;
      case 2:
        console.log(2);
        let classInfo = findStu(1);
        console.table(classInfo.result);
        if (classInfo.findstate) {
          let _sutInfo = findStu(2, "stuID", classInfo.classchiose);
          console.table(_sutInfo.result);
          if (classInfo.classchiose) {
            console.log(
              "请选择要修改的信息：1. 名字   2. 年龄   3. 性别   4. 分数   5. 返回"
            );
            const chiose = question("") * 1;
            // if (chiose == 5) {
            //   break;
            // }
            if (chiose > 0 && chiose < 5) {
              console.log("请输入" + keys[chiose] + "：");
              const value = question("");
              stuInfo[classInfo.classchiose][_sutInfo.stuNum * 1][
                Object.keys(stuInfo[0][0])[chiose]
              ] = value;
              console.table(stuInfo[classInfo.classchiose]);
            }
          }
          console.log("修改完成，按回车返回");
        }
        break;
      case 3:
        console.log("请选择操作：1.添加班级   2.添加学生   3.返回");
        const _chiose2 = question("") * 1;
        if (_chiose2 === 1) {
          stuInfo[stuInfo.length] = [];
          console.table(stuInfo);
        }
        if (_chiose2 === 2) {
          let stu = {
            stuID: "",
            stuName: "",
            stuAge: "",
            stuGender: "",
            stuScore: "",
            className: "",
          };
          let tip = "请选择班级：";
          for (const index in stuInfo) {
            const _idnex = index * 1 + 1;
            tip = tip + _idnex + "." + _idnex + "班   ";
          }
          console.log(tip);
          const classNum = question("") * 1;
          if (classNum > 0 && classNum <= stuInfo.length) {
            stu.stuID = stuInfo[classNum - 1]["length"]
              ? stuInfo[classNum - 1][stuInfo[classNum - 1]["length"] - 1][
                  "stuID"
                ] *
                  1 +
                1
              : "1";
            console.log("请输入名字：");
            stu.stuName = question("");
            console.log("请输入年龄：");
            stu.stuAge = question("");
            console.log("请输入性别：");
            stu.stuGender = question("");
            console.log("请输入分数：");
            stu.stuScore = question("");
            stu.className = classNum + "班";
            console.log("添加完毕，按回车返回！");
          }
          stuInfo[classNum - 1].push(stu);
          console.log(stu);
        }
        if (_chiose2 === 1 || _chiose2 === 2) {
          console.log("添加完毕，按回车返回");
        }
        if (_chiose2 === 3) {
          console.log("请再次回车确认返回！");
        }
        result = [];
        break;
      case 4:
        console.log("请选择操作：1.删除班级   2.删除学生   3.返回");
        const _chiose3 = question("") * 1;
        if (_chiose3 === 1) {
          let tip = "请选择班级：";
          for (const index in stuInfo) {
            const _idnex = index * 1 + 1;
            tip = tip + _idnex + "." + _idnex + "班   ";
          }
          console.log(tip);
          const classNum = question("") * 1;
          if (classNum - 1 >= 0 && classNum - 1 < stuInfo.length) {
            stuInfo.splice(classNum - 1, 1);
          }
        }
        if (_chiose3 === 2) {
          let tip = "请选择班级：";
          for (const index in stuInfo) {
            const _idnex = index * 1 + 1;
            tip = tip + _idnex + "." + _idnex + "班   ";
          }
          console.log(tip);
          const classNum = question("") * 1;
          console.log("请选择要删除学生的学号：");
          console.table(stuInfo[classNum - 1]);
          const stuID = question("");
          for (const stuKey in stuInfo[classNum - 1]) {
            console.log(stuKey);
            if (stuInfo[classNum - 1][stuKey]["stuID"] === stuID) {
              stuInfo[classNum - 1].splice(stuID - 1, 1);
              console.table(stuInfo[classNum - 1]);
            }
          }
        }
        if (_chiose3 === 1 || _chiose3 === 2) {
          console.log("删除完毕，按回车返回");
        }
        if (_chiose3 === 3) {
          console.log("请再次回车确认返回！");
        }
        break;
      case 5:
        let tip = "请选择班级：";
        for (const index in stuInfo) {
          const _idnex = index * 1 + 1;
          tip = tip + _idnex + "." + _idnex + "班   ";
        }
        console.log(tip);
        tip = "请选择班级：";
        const oldClass = question("") * 1;

        console.table(stuInfo[oldClass - 1]);
        console.log("请输入学号：");
        const stuID = question("");
        for (const oldClassEven of stuInfo[oldClass - 1]) {
          if (oldClassEven.stuID === stuID) {
            console.table(oldClassEven);
          }
        }
        for (const index in stuInfo) {
          const _index = index * 1 + 1;
          if (_index !== oldClass) {
            tip = tip + _index + "." + _index + "班   ";
          }
        }
        console.log(tip);
        const newClass = question("") * 1;
        for (const stuKey in stuInfo[oldClass - 1]) {
          if (
            stuInfo !== oldClass &&
            stuInfo[oldClass - 1][stuKey]["stuID"] === stuID
          ) {
            let temp = stuInfo[oldClass - 1][stuKey];
            stuInfo[oldClass - 1].splice(stuKey, 1);
            temp.stuID = `${stuInfo[newClass - 1].length + 1}`;
            stuInfo[newClass - 1].push(temp);
            console.table(stuInfo[newClass - 1]);
          }
        }
        console.log("转班完成，按回车键返回！");
        break;
      case 6:
        stuflag = false;
        break;
    }
    question("");
  }
}
function findStu(chiose, key, _class) {
  let result = [];
  let classchiose = 0;
  let stuNum = "";
  if (chiose === 2) {
    console.log(
      "请输入" + keys[Object.keys(stuInfo[0][0]).indexOf(key)] + "："
    );
    const _value = question("");
    if (_class) {
      for (const index in stuInfo[_class - 1]) {
        if (stuInfo[_class - 1][index][key] === _value) {
          stuNum = index;
          result.push(stuInfo[_class - 1][index]);
        }
      }
    } else {
      for (const even of stuInfo) {
        for (const _even of even) {
          if (_even[key] === _value) {
            result.push(_even);
          }
        }
      }
    }
  }
  if (chiose === 1) {
    let tip = "班级：";
    for (const index in stuInfo) {
      const _idnex = index * 1 + 1;
      tip = tip + _idnex + "." + _idnex + "班   ";
    }
    console.log(tip);
    classchiose = question("") * 1;
    result = stuInfo[classchiose - 1];
  }
  const findstate = !(chiose === 3);
  return { result, findstate, classchiose, stuNum };
}
main();

// Students();
// console.table(findStu(1, "stuAge").result);
// console.log(Object.keys(stuInfo[0][0]).indexOf("stuName"));
