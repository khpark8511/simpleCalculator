import "./styles.css";

const input = document.querySelector(".inputNum"),
  reset = document.querySelector(".reset"),
  plus = document.querySelector(".plus"),
  minus = document.querySelector(".minus"),
  multi = document.querySelector(".multiply"),
  div = document.querySelector(".divide"),
  equal = document.querySelector(".equal");
const one = document.querySelector(".one"),
  two = document.querySelector(".two"),
  three = document.querySelector(".three"),
  four = document.querySelector(".four"),
  five = document.querySelector(".five"),
  six = document.querySelector(".six"),
  seven = document.querySelector(".seven"),
  eight = document.querySelector(".eight"),
  nine = document.querySelector(".nine"),
  zero = document.querySelector(".zero");
let prev, cur, res;
let flag = false;
let pow = false;
let oper;
let count = 0;

function handleOp(e) {
  oper = e.target.value;
  flag = true;
  if (prev === 2 && cur === 2) {
    pow = true;
    computeNum(prev, cur);
    prev = res;
    cur = 0;
    count = 0;
    console.log("test");
  } else if (pow === true && cur === 2) {
    computeNum(prev, cur);
    prev = res;
    cur = 0;
    count = 0;
  }
}

function computeNum(prev, cur) {
  input.value = "";
  switch (oper) {
    case "+":
      res = prev + cur;
      break;
    case "-":
      res = prev - cur;
      break;
    case "*":
      res = prev * cur;
      break;
    case "/":
      res = prev / cur;
      break;
    default:
  }
  console.log(res);
  input.value = "";
  input.value += res;
  input.innerText = input.value;
}
function handleEqual() {
  computeNum(prev, cur);
  flag = false;
  count = 0;
}

function clearScreen() {
  input.value = "";
  prev = 0;
  cur = 0;
  res = 0;
  pow = false;
  flag = false;
  count = 0;
}

function selectNum(e) {
  if (flag === false) {
    // check prev or cur
    input.value += e.target.value;
    //console.log(res);
    input.innerText += input.value;
    prev = parseInt(input.value);
    console.log("flagfalse");
  } else {
    // check prev or cur
    console.log("flagtrue");
    if (count === 0) {
      // if first cur number , clear
      console.log("countzero");
      if (pow === true && e.target.value == 2) {
        input.value = "";
        input.value += e.target.value;
        cur = parseInt(input.value);
        computeNum(prev, cur);
        console.log("testpow");
        //input.value += res;
      } else {
        input.value = "";
        input.value += e.target.value;
        cur = parseInt(input.value);
        input.innerText += cur;
        count++;
        console.log("countplus");
      }
    } else {
      // not clear
      console.log("countnotzero");
      input.value += e.target.value;
      cur = parseInt(input.value);
      input.innerText += cur;
    }
  }
}
function init() {
  reset.addEventListener("click", clearScreen);

  plus.addEventListener("click", handleOp);
  minus.addEventListener("click", handleOp);
  multi.addEventListener("click", handleOp);
  div.addEventListener("click", handleOp);

  equal.addEventListener("click", handleEqual);

  one.addEventListener("click", selectNum);
  two.addEventListener("click", selectNum);
  three.addEventListener("click", selectNum);
  four.addEventListener("click", selectNum);
  five.addEventListener("click", selectNum);
  six.addEventListener("click", selectNum);
  seven.addEventListener("click", selectNum);
  eight.addEventListener("click", selectNum);
  nine.addEventListener("click", selectNum);
  zero.addEventListener("click", selectNum);
}

init();
