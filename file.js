$(document).ready(function(){
    $(".img1").click(function(){
      $(".img1").hide(0);
      $(".first").show(100);
    });
    $(".first").click(function(){
      $(".first").hide(100);
      $(".img1").show(100);
    });
});
$(document).ready(function(){
    $(".img2").click(function(){
      $(".img2").hide(0);
      $(".second").show(100);
    });
    $(".second").click(function(){
      $(".second").hide(0);
      $(".img2").show(100);
    });
});
$(document).ready(function(){
    $(".img3").click(function(){
      $(".img3").hide(0);
      $(".third").show(100);
    });
    $(".third").click(function(){
      $(".third").hide();
      $(".img3").show(100);
    });
});






function validate(){
  var names = getElementById("name");
  var emails = getElementById("Email");
  var messages = getElementById("mess");

  if(names.value === "" || emails.value === "")
  alert("thank you");
  

  
}

