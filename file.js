$(document).ready(function(){
    $(".img1").click(function(){
      $(".img1").hide(100);
      $(".first").toggle(100);
      $(".first").show(100);
    })
    $(".first").click(function(){
      $(".first").hide(1200);
      $(".img1").toggle(1200);
      $(".img1").show(1200);
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

