$(document).ready(function(){
    $(".img1").click(function(){
      $(".img1").hide(100);
      $(".first").show(100);
    });
    $(".first").click(function(){
      $(".first").hide(100);
      $(".img1").show(100);
    });
});
$(document).ready(function(){
    $(".img2").click(function(){
      $(".img2").hide(100);
      $(".second").show(100);
    });
    $(".second").click(function(){
      $(".second").hide(100);
      $(".img2").show(100);
    });
});
$(document).ready(function(){
    $(".img3").click(function(){
      $(".img3").hide(100);
      $(".third").show(100);
    });
    $(".third").click(function(){
      $(".third").hide(100);
      $(".img3").show(100);
    });
});



// $(document).ready(function(){
//     $('#work').hover(function () {
//     $(this).animate({opacity:'1'});
//     },
//     function () {
//     $(this).animate({opacity:'0'});
// });
// });

var names = document.getElementById("name");
var email = document.getElementById("Email");
var messages = document.getElementById("mess");
var results =  document.getElementById("results")

function formInput(){
    if(name.value === "")
    console.log("input name")
};

