function oddeven() {
  var number = Number(document.querySelector(".number").value);

  if (number % 2 == 0) {

    document.querySelector(".result").innerHTML = "Even";
  } else {
    
    document.querySelector(".result").innerHTML = "Odd";
  }
}
