(function($){
  $.fn.greenify = function(){
    this.css("color", "green")
    return this
  }
  $.fn.addGreenDiv = function(){
    var newDiv = $("<div>Jquery Plugins are really really cool!</div>").greenify()
    this.append(newDiv)
    return this
  }
})(jQuery);
