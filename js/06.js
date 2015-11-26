function isPrimeNumber(a){
if (a<2){
  return false;
}
var i = 1;
while(i < a / 2){
  i = i + 1
  if(a % i == 0){
    return false;
  }
}
return true;
}
