$(document).ready(function() {
  $(".btn-dark").click(function(){
    $(".animal").addClass("dark");
    $("body").addClass("dark");
  });
  $(".btn-light").click(function(){
    $(".animal").removeClass("dark");
    $("body").removeClass("dark");
  });
});
