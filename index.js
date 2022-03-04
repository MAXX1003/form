function check()
{
  var m1 = document.getElementsByTagName("input")[0].value;
  if(m1 =="")
  {
    $(".p1").text("This is required")
    alert("Enter your Email")
    return false;
  }
  else{
  var pk = document.getElementsByTagName("input")[1].value;
  if(pk == "")
  {
    $(".p2").text("This is required")
    alert("Enter your password")
  }
  if (m1 == "fwdtoharish@gmail.com"&&pk =="harish") {
    alert("LOGIN SUCCESSFUL!!!!");
    return false;

  }
  else {
    alert("LOGIN FAILED!!!!!!");
  }
}

}
function message(){
  alert("YOU WILL RECEIVE A MAIL TO CHANGE THE PASSWORD")
}
