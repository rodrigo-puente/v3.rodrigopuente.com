$(function() {
	
  var $window = $(window);
  var $header = $('#header');
  var height = $window.height() < 460 ? 720 : $window.height();
	  
  $header.css({'height': height + 'px'}); 

  $window.resize(function(){
    var $window = $(window);
    var $header = $('#header');
    var height = $window.height() < 460 ? 720 : $window.height();

    $header.css({'height': height + 'px'});
  });          

});