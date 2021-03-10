// 1-10的随机数
function GetNum(x = 1, y = 10) {
  return Math.floor(Math.random() * (y - x + 1) + x);
}
