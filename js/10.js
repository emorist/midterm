function toOrdinalNumber(a){
  var b = a % 10

  if(b = 1 && a != 11){
  return a + "st";
  }if(b = 2 && a != 12){
    return a + "nd";
  }if(b = 3 && a != 13){
  return a + "rd";
}else{
    return a + "th";
}
}
