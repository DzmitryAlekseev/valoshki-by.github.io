//Смена картинки в слайдере

var i=0;
var i0=1;
function slider() {
    var img = document.querySelectorAll('.slider__image');
    if(i==4){
        i=0;
    }
    if (i0==4){
        i0=0;
    }
    img[i].classList.toggle('slider__hidden');
    img[i0].classList.toggle('slider__hidden');
    i++;
    i0++; 
}
setInterval(()=>slider(),5000)

//для текста в разделе информации

var p = document.querySelectorAll('.info-element_h4 ~ .info-element_p');
console.log(p)

function ph(){

}

function switchAnswer(ele) {
      //console.log(ele);
      var faqAnswer = ele.querySelector(".info-element_p");
      faqAnswer.classList.toggle("info-element_p_hiden");
    }

    //menu
    jQuery(function ($) {
        if ($) {
          console.log("jQuery start");
        }
        
        
        var navMenu = $(".menu"); // выбираем меню
        console.log(navMenu.offset().top)
        
        var navMenuTop = navMenu.offset().top; //получение знaчения св-ва top
        var toTop = $(".to-top"); // выбираем кнопку to-top
        var body = $("html, body");
    
        $(window).on("resize", function () {
          console.log("окно изменило размер");
          // получаем св-во top каждый раз при изменения размеров окна браузера
          navMenuTop = navMenu.offset().top;
          console.log("navMenuTop: ", navMenuTop);
    
          console.log("height:", $(window).innerHeight()); // высота viewport
          console.log("width:", $(window).innerWidth());   // ширина viewport
        });
    
        $(window).on("scroll", function () {
          var winScrollTopValue = $(window).scrollTop(); // насколько проскроллили страницу
    
          console.log(winScrollTopValue);
    
          if (winScrollTopValue > navMenuTop) {
            console.log("Ятут")
            navMenu.addClass("menu_fixed");
          } else {
            console.log("Ятут а")
            navMenu.removeClass("menu_fixed");
          }
    
      
        });

   
    })