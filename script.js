$(document).ready(function(){
  $("h1").on("click", function(){
    $("body").append($("<div>jQuery plugins are cool!</div>"))
  });
  $("h2").on("click", function(){
    $("div").greenify()
  });
  $("h3").on("click", function(){
    $("body").addGreenDiv()
  });
})
