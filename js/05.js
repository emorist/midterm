function fizzbuzz(a){
  var b = a % 3
  var c = a % 5
  var d = a % 15
  if(d == 0){
    return "fizzbuzz";
  }if(b == 0){
    return "fizz";
  }if(c == 0){
    return "buzz";
  }else{
    return a;
  }
}
