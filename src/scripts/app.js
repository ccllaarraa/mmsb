import "../sass/app.scss";



$(document).ready(function(){
    $('.project-imgs').slick({
        infinite: true,
        dots: true,
        centerMode: true,
        arrows: false,
        variableWidth: true,
    });

    $('.minus').hide();
    $('.captions').hide();
    $(".plus").click(function(){
        $(this).parent().next('.captions').slideToggle();
        $(this).toggleClass('plus minus');
    });

    var btn = $('.backtotop');

btn.on('click', function(e) {
    console.log('clicked')
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
  });