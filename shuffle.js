function shuffle(arrLength, num){
  arr = []
  i = 0;
  while (i < arrLength){
    arr.push(i + 1)
    i++;
  }
  if(i == arr.length){
    var a = 0;
    var i = 0;
    var shuffleAmt = num;
    for(a; a < shuffleAmt; a++){
      var r = Math.floor(Math.random() * (arr.length - 1));
      var x = Math.floor(Math.random() * (arr.length - 1));
      a++;
      previousVal = arr[r]
      arr[r] = arr[x], arr[x] = previousVal
      console.log(arr)
    }
  }
}
shuffle(20, 80)
