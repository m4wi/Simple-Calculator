function getHistory() {
  return document.getElementById("history").innerText;
}

function printHistory(num) {
  document.getElementById("history").innerText = num;
}

function getFormattedNumber(num) {
  if (num == "-") {
    return "";
  }
  let n = Number(num);
  let value = n.toLocaleString("en");
  return value;
}

function printOutput(num) {
  if (num == "") {
    document.getElementById("output-result").innerText = num;
  } else {
    document.getElementById("output-result").innerText =
      getFormattedNumber(num);
  }
}

function getOutput() {
  return document.getElementById("output-result").innerText;
}

function reverseNumberFormat(num) {
  return Number(num.replace(/,/g, ""));
}

var operator = document.getElementsByClassName("btn-op");

for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    if (this.id == "clear") {
      printHistory("");
      printOutput("");
    } else if (this.id == "backspace") {
      var output = reverseNumberFormat(getOutput()).toString();
      if (output) {
        //if output has a value
        output = output.substr(0, output.length - 1);
        printOutput(output);
      }
    } else {
      var output = getOutput();
      var history = getHistory();
      if (output == "" && history != "") {
        if (isNaN(history[history.length - 1])) {
          history = history.substr(0, history.length - 1);
        }
      }
      if (output != "" || history != "") {
        output = output == "" ? output : reverseNumberFormat(output);
        history = history + output;
        if (this.id == "=") {
          var result = eval(history);
          printOutput(result);
          printHistory("");
        } else {
          history = history + this.id;
          printHistory(history);
          printOutput("");
        }
      }
    }
  });
}

var number = document.getElementsByClassName("btn-number");
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    var output = reverseNumberFormat(getOutput());
    if (output != NaN) {
      output = output + this.id;
      printOutput(output);
    }
  });
}
