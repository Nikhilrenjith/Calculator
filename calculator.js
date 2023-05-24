function addinput(value) {
  document.getElementById("result").value += value;
}
function Clear() {
  document.getElementById("result").value = "";
}
function Del() {
  var input = document.getElementById("result").value;
  var newInput = input.slice(0, -1);
  document.getElementById("result").value = newInput;
}
function find() {
  var input = document.getElementById("result").value;
  if (input === "") {
    result = 0;
    document.getElementById("result").value = result;
  } else {
    var result = eval(input);
    document.getElementById("result").value = result;
  }
}
function toggleSign() {
  var input = document.getElementById("result").value;
  var result = parseFloat(input) * -1;
  document.getElementById("result").value = result;
}
