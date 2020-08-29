function dis(val) {
  var screenValue = document.getElementById("result").value;

  if (isNaN(val)) {
    if (isNaN(screenValue[screenValue.length - 1])) {
      console.log("cannot add value" + screenValue[screenValue.length - 1]);
    } else {
      document.getElementById("result").value += val;
    }
  } else {
    document.getElementById("result").value += val;
  }
}

function solve() {
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("result").value = y;
}

function clr() {
  document.getElementById("result").value = "";
}
