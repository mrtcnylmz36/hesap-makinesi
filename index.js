const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total = total + args[i];
  }
  return total;
};
const sub = (a, b) => {
  return a - b;
};
const multipler = (a, b) => {
  return a * b;
};
const divide = (prev, next) => {
  if (next !== 0) {
    return prev / next;
  } else {
    return "Tanımsız";
  }
};

const RESULT = document.querySelector("#result");
const NUMBER_CONTAİNER = document.querySelector(".number-container");

// four transactions

const topla = document.querySelector("#arti");
const cikar = document.querySelector("#eksi");
const carp = document.querySelector("#carpi");
const bol = document.querySelector("#bolme");

// equal
const equal = document.querySelector("#enter");
const AC = document.querySelector("#ac");
const dot = document.querySelector("#nokta");

NUMBER_CONTAİNER.addEventListener("click", function (e) {
  if (e.target.id === "zero") {
    RESULT.innerText += "0";
  } else if (e.target.id === "one") {
    if (RESULT.innerText !== "" && RESULT.innerText[0] === "0") {
      RESULT.innerText[0] = "";
      RESULT.innerText = "1";
    } else {
      RESULT.innerText += "1";
    }
  } else if (e.target.id === "two") {
    if (RESULT.innerText !== "" && RESULT.innerText[0] === "0") {
      RESULT.innerText[0] = "";
      RESULT.innerText = "2";
    } else {
      RESULT.innerText += "2";
    }
  } else if (e.target.id === "three") {
    if (RESULT.innerText !== "" && RESULT.innerText[0] === "0") {
      RESULT.innerText[0] = "";
      RESULT.innerText = "3";
    } else {
      RESULT.innerText += "3";
    }
  } else if (e.target.id === "four") {
    if (RESULT.innerText !== "" && RESULT.innerText[0] === "0") {
      RESULT.innerText[0] = "";
      RESULT.innerText = "4";
    } else {
      RESULT.innerText += "4";
    }
  } else if (e.target.id === "five") {
    if (RESULT.innerText !== "" && RESULT.innerText[0] === "0") {
      RESULT.innerText[0] = "";
      RESULT.innerText = "5";
    } else {
      RESULT.innerText += "5";
    }
  } else if (e.target.id === "six") {
    if (RESULT.innerText !== "" && RESULT.innerText[0] === "0") {
      RESULT.innerText[0] = "";
      RESULT.innerText = "6";
    } else {
      RESULT.innerText += "6";
    }
  } else if (e.target.id === "seven") {
    if (RESULT.innerText !== "" && RESULT.innerText[0] === "0") {
      RESULT.innerText[0] = "";
      RESULT.innerText = "7";
    } else {
      RESULT.innerText += "7";
    }
  } else if (e.target.id === "eight") {
    if (RESULT.innerText !== "" && RESULT.innerText[0] === "0") {
      RESULT.innerText[0] = "";
      RESULT.innerText = "8";
    } else {
      RESULT.innerText += "8";
    }
  } else if (e.target.id === "nine") {
    if (RESULT.innerText !== "" && RESULT.innerText[0] === "0") {
      RESULT.innerText[0] = "";
      RESULT.innerText = "9";
    } else {
      RESULT.innerText += "9";
    }
  } else if (e.target.id === "ac") {
    RESULT.innerText = "";
  } else if (e.target.id === "delete") {
    RESULT.innerText = RESULT.innerText.slice(0, -1);
  } else if (
    e.target.id === "arti" &&
    RESULT.innerText.includes("/") == false &&
    RESULT.innerText.includes("x") == false &&
    RESULT.innerText.includes("+") == false &&
    RESULT.innerText.includes("-") == false &&
    RESULT.innerText.slice(0, 1) !== "+" &&
    RESULT.innerText.slice(0, 1) !== ""
  ) {
    RESULT.innerText += "+";
  } else if (
    e.target.id === "eksi" &&
    RESULT.innerText.includes("/") == false &&
    RESULT.innerText.includes("x") == false &&
    RESULT.innerText.includes("+") == false &&
    RESULT.innerText.includes("-") == false &&
    RESULT.innerText.slice(0, 1) !== "-" &&
    RESULT.innerText.slice(0, 1) !== ""
  ) {
    RESULT.innerText += "-";
  } else if (
    e.target.id === "carpi" &&
    RESULT.innerText.includes("/") == false &&
    RESULT.innerText.includes("x") == false &&
    RESULT.innerText.includes("+") == false &&
    RESULT.innerText.includes("-") == false &&
    RESULT.innerText.slice(0, 1) !== "x" &&
    RESULT.innerText.slice(0, 1) !== ""
  ) {
    RESULT.innerText += "x";
  } else if (
    e.target.id === "bolme" &&
    RESULT.innerText.includes("/") == false &&
    RESULT.innerText.includes("x") == false &&
    RESULT.innerText.includes("+") == false &&
    RESULT.innerText.includes("-") == false &&
    RESULT.innerText.slice(0, 1) !== "/" &&
    RESULT.innerText.slice(0, 1) !== ""
  ) {
    RESULT.innerText += "/";
  }
});

equal.addEventListener("click", function () {
  if (RESULT.innerText.includes("+")) {
    let indexSum = RESULT.innerText.indexOf("+");
    let next = RESULT.innerText.slice(indexSum + 1);
    let prev = RESULT.innerText.slice(0, indexSum);
    let sonuc = sum(Number(next), Number(prev));
    RESULT.innerText = sonuc;
  } else if (RESULT.innerText.includes("-")) {
    let indexSum = RESULT.innerText.indexOf("-");
    let next = RESULT.innerText.slice(indexSum + 1);
    let prev = RESULT.innerText.slice(0, indexSum);
    let sonuc = sub(Number(prev), Number(next));
    RESULT.innerText = sonuc;
  } else if (RESULT.innerText.includes("x")) {
    let indexSum = RESULT.innerText.indexOf("x");
    let next = RESULT.innerText.slice(indexSum + 1);
    let prev = RESULT.innerText.slice(0, indexSum);
    let sonuc = multipler(Number(prev), Number(next));
    RESULT.innerText = sonuc;
  } else if (RESULT.innerText.includes("/")) {
    let indexSum = RESULT.innerText.indexOf("/");
    let next = RESULT.innerText.slice(indexSum + 1);
    let prev = RESULT.innerText.slice(0, indexSum);
    let sonuc = divide(Number(prev), Number(next));
    RESULT.innerText = sonuc;
  }
});
