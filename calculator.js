function addinput(value) {
  document.getElementById("result").value += value;
}

function Clear() {
  document.getElementById("result").value = "";
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
