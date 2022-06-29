(function($) {
// var windowWidth = $(window).width();
$('.hamburgur-btn').on('click', function(){
  // $('.main-nav').toggleClass('mobile-menu');
  $('.main-nav').slideToggle(600);
  $(this).toggleClass('close-icon');
});

$(window).scroll(function() {    // this will work when your window scrolled.
  var height = $(window).scrollTop();
  var width = $(window).width();  //getting the scrolling height of window

  if(height  >= 0){
    $('.main-nav').slideUp();
    // $('.main-nav').removeClass('mobile-menu');
    // $('.mobile-menu').slideUp();
    $('.hamburgur-btn').removeClass('close-icon');
  } else{
    $('.mobile-menu').slideDown();

  }
  if((width > 767)){
    $('.main-nav').addClass('mobile-menus');
  }else{
    $('.main-nav').removeClass('mobile-menus');
  }


});

/*Google Map Style*/
var CustomMapStyles  = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]

var windowWidth = $(window).width();
$('.navbar-toggle').on('click', function(){
	$('#mobile-nav').slideToggle(300);
});
	// sticky-header /

$(window).scroll(function() {    // this will work when your window scrolled.
  var height = $(window).scrollTop();  //getting the scrolling height of window

  if(height  > 100) {
    $(".header2").addClass('fixed-header');  
    // $(".balance").addClass('height70');ss
  } else{
    // $(".balance").removeClass('height70');
    $(".header2").removeClass('fixed-header');
  }  

  if(height  > 200) {
    $(".header2").addClass('stiky-header');
  } else{
    $(".header2").removeClass('stiky-header');
  }

});

  // couner//////
$('.counter').counterUp({
    delay: 1,
    time: 3000
});

//onepagenav//
if( $('#nav').length ){
$('#nav').onePageNav();
}
if( $('#nav').length ){
$('#scnd-nav').onePageNav();
}


//matchHeightCol
if($('.mHc').length){
  $('.mHc').matchHeight();
};
if($('.mHc1').length){
  $('.mHc1').matchHeight();
};
if($('.mHc2').length){
  $('.mHc2').matchHeight();
};
if($('.mHc3').length){
  $('.mHc3').matchHeight();
};
if($('.mHc4').length){
  $('.mHc4').matchHeight();
};
if($('.mHc5').length){
  $('.mHc5').matchHeight();
};

//to-scrool-top-btn//

if( $('#to-top-btn').length ){
  $(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
    $("#to-top-btn").addClass('slow');
  }else{
    $("#to-top-btn").removeClass('slow');
  }
  });
    $("#to-top-btn").click(function(){
    $('html ,body').animate({scrollTop : 0},1000);
  });
} 

//$('[data-toggle="tooltip"]').tooltip();

//banner animation
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  $('.page-banner-bg').css({
    '-webkit-transform' : 'scale(' + (1 + scroll/2000) + ')',
    '-moz-transform'    : 'scale(' + (1 + scroll/2000) + ')',
    '-ms-transform'     : 'scale(' + (1 + scroll/2000) + ')',
    '-o-transform'      : 'scale(' + (1 + scroll/2000) + ')',
    'transform'         : 'scale(' + (1 + scroll/2000) + ')'
  });
});


if($('.fancybox').length){
$('.fancybox').fancybox({
    //openEffect  : 'none',
    //closeEffect : 'none'
  });

}


/**
Responsive on 767px
*/

// if (windowWidth <= 767) {
  $('.toggle-btn').on('click', function(){
    $(this).toggleClass('menu-expend');
    $('.toggle-bar ul').slideToggle(500);
  });


// }



// http://codepen.io/norman_pixelkings/pen/NNbqgG
// https://stackoverflow.com/questions/38686650/slick-slides-on-pagination-hover


/**
Slick slider
*/
if( $('.testiSlider').length ){
    $('.testiSlider').slick({
      dots: true,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 1000,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    });
}


if( $('#mapID').length ){
var latitude = $('#mapID').data('latitude');
var longitude = $('#mapID').data('longitude');

var myCenter= new google.maps.LatLng(latitude,  longitude);
function initialize(){
    var mapProp = {
      center:myCenter,
      mapTypeControl:true,
      scrollwheel: false,
      zoomControl: true,
      disableDefaultUI: true,
      zoom:7,
      streetViewControl: false,
      rotateControl: true,
      mapTypeId:google.maps.MapTypeId.ROADMAP,
      styles: CustomMapStyles
      };

    var map= new google.maps.Map(document.getElementById('mapID'),mapProp);
    var marker= new google.maps.Marker({
      position:myCenter,
        //icon:'map-marker.png'
      });
    marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);

}
//to-scrool-top-btn//

if( $('#to-top-btn').length ){
  $(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
    $("#to-top-btn").addClass('slow');
  }else{
    $("#to-top-btn").removeClass('slow');
  }
  });
    $("#to-top-btn").click(function(){
    $('html ,body').animate({scrollTop : 0},1000);
  });
}
// hide-witdh-maintain///////////////////////////////////////////////////
//if( $('Contact-Us-section').length ){
  function contactsec(){
    var windowWidth = $(window).width();
    var containerwidth = $(".container-lg").width();
    var mlwidth = ((windowWidth-containerwidth)/2);
    // var divheight = $(".Contact-Us-section").height();
    var mradd = mlwidth+1;
    $(".bg").css({
      "width":mradd,
      // "height":divheight,
    });
  }
  contactsec();
  $(window).resize(function(){
    contactsec();
  });
//}
/* BS form Validator*/
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

    new WOW().init();

})(jQuery);