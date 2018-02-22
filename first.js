function first(n = 1){
  var arr = [1,2,3,4,5,6,7];
  var newArr = [];
  var taco = 0;
  while(taco < n) {
    newArr.push(arr[taco]);
    taco++;
  }
    console.log(newArr);
}
first(3)
