$(document).ready(function(){
  (function($){
    $.fn.greenify = function(){
      this.css("color", "green")
      return this
    }
  })(jQuery);

  $("h1").on("click", function(){
    $("body").append($("<div>jQuery plugins are cool!</div>"))
  })

  $("h2").on("click", function(){
    $("div").greenify()
  })
})
