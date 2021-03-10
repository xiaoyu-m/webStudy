let a = new Date();
let comments = [
  {
    name: "张三1",
    text: "留言第一条",
    time: "2021-3-2 16:32:20",
  },
  {
    name: "张三2",
    text: "第二条留言",
    time: "2021-3-2 16:32:20",
  },
  {
    name: "张三3",
    text: "留言第三条",
    time: "2021-3-2 16:32:20",
  },
];
// 格式化名字
function formatName() {
  let lastname = comments[comments.length - 1].name;
  let newNum = lastname[lastname.length - 1] * 1 + 1;
  return "张三" + newNum;
}
function showComments(time) {
  return `
  ${time.getFullYear()}-${
    time.getMonth() + 1
  }-${time.getDate()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}
  `;
}
console.log(formatName());
