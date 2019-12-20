import "../sass/app.scss";



$(document).ready(function(){
    $('.project-imgs').slick({
        infinite: true,
        dots: true,
        centerMode: true,
        arrows: false,
    });

    $('.minus').hide();
    $('.captions').hide();
    $(".plus").click(function(){
        $(".captions").slideToggle();
        $('.plus').hide();
        $('.minus').show();    
    });
    $(".minus").click(function(){
        $(".captions").slideToggle();
        $('.minus').hide();
        $('.plus').show();    
    });

    var btn = $('.backtotop');

btn.on('click', function(e) {
    console.log('clicked')
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
  });