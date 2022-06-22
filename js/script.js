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


//карта на индексе


function changeMinsk(){
    document.getElementById("map-index__region").src="img/slider/belarus/minsk.jpg";
    document.getElementById("map-index__region").alt="Иллюстрация Минск";
    }

    function changeBrest(){
    document.getElementById("map-index__region").src="img/slider/belarus/brest.jpg";
    document.getElementById("map-index__region").alt="Иллюстрация Брест";
    }
    function changeGrodno(){
    document.getElementById("map-index__region").src="img/slider/belarus/grodno.jpg";
    document.getElementById("map-index__region").alt="Иллюстрация Гродно";
    }
    function changeVitebsk(){
    document.getElementById("map-index__region").src="img/slider/belarus/vitebsk.jpg";
    document.getElementById("map-index__region").alt="Иллюстрация Витебск";
    }

    function changeHomel(){
    document.getElementById("map-index__region").src="img/slider/belarus/homel.jpg";
    document.getElementById("map-index__region").alt="Иллюстрация Гомель";
    }

    function changeMohilev(){
    setTimeout(() => document.getElementById("map-index__region").src="img/slider/belarus/mohilev.jpg",0);
    document.getElementById("map-index__region").alt="Иллюстрация Могилев";
    }

    function changeBel(){
       document.getElementById("map-index__region").src="img/slider/belarus/bel.jpg";
       document.getElementById("map-index__region").alt="Иллюстрация Беларуси";
    }
        

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
   
        var navMenu = $(".menu"); // выбираем меню      
        var navMenuTop = navMenu.offset().top; //получение знaчения св-ва top
        var toTop = $(".to-top"); // выбираем кнопку to-top
        var body = $("html, body");

    
        $(window).on("resize", function () {
          navMenuTop = navMenu.offset().top;
        });
    
        $(window).on("scroll", function () {
          var winScrollTopValue = $(window).scrollTop(); // насколько проскроллили страницу

          if (winScrollTopValue > navMenuTop) {
            navMenu.addClass("menu_fixed");
            toTop.removeClass("to-top_hiden")
          } else {
            toTop.addClass("to-top_hiden")
            navMenu.removeClass("menu_fixed");
          }

        });

       
        toTop.on("click", toTopClicked); //обрабатываем клик по ссылке

        function toTopClicked(event) {
          event.preventDefault(); //отменить действие по умолчанию т.е. переход по ссылке
       
    
          body.animate({
            scrollTop: 0
          }, 1200);
        }
    })