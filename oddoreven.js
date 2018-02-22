function oddOrEven(){
  let arr = Array.from(Array(16), (_,x) => x);
  console.log(arr);
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0)
    console.log("even")
    else {
      console.log("odd")
    }
  }
}
oddOrEven()
