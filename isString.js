function isString() {
  var input = prompt("type some shit", "test");

  i = input.split("");

  if (input[0] == '"' && input[input[input.length - 1]] == '"'){
    console.log("is string");
  }else {
    console.log("is not string");
  }
}
isString()
