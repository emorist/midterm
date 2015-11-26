function isLeapYear(a){
  var b = a% 4
  var c = a%100
  var d = a%400
  if(b==0 && c !== 0){
    return true;
  }if(b == 0 && c == 0 && d !== 0){
    return false;
  }if(b==0 && d ==0){
    return true;
  }else{
    return false;
  }
}
