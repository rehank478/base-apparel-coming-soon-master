function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
$("#button-arrow").one("click",function(){
  if(!isEmail($("#_email").val())){
      $("#error").removeClass("text4");
      $("#error").addClass("text4-error");
      $("#_email").addClass("error-img");
      $("#_email").attr("placeholder", "john@example.com");
  }else{
    $("#error").addClass("text4");
    $("#error").removeClass("text4-error");
    $("#_email").removeClass("error-img");
  }


$("#_email").keypress(function(){
  if(!isEmail($("#_email").val())){
      $("#error").removeClass("text4");
      $("#error").addClass("text4-error");
      $("#_email").addClass("error-img");
      $("#_email").attr("placeholder", "john@example.com");
  }else{
    $("#error").addClass("text4");
    $("#error").removeClass("text4-error");
    $("#_email").removeClass("error-img");
  }
});
});
