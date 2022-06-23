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
    document.getElementById("map-index__region").src="img/belarus/minsk.jpg";
    document.getElementById("map-index__region").alt="Иллюстрация Минск";
    }

  function minsk() {
      location.replace("minsk-region.html")
  };

    function changeBrest(){
    document.getElementById("map-index__region").src="img/belarus/brest.jpg";
    document.getElementById("map-index__region").alt="Иллюстрация Брест";
    }

    function brest() {
      location.replace("brest-region.html")
  };
    
    function changeGrodno(){
    document.getElementById("map-index__region").src="img/belarus/grodno.jpg";
    document.getElementById("map-index__region").alt="Иллюстрация Гродно";
    }

    function grodno() {
      location.replace("grodno-region.html")
  };
    
    function changeVitebsk(){
    document.getElementById("map-index__region").src="img/belarus/vitebsk.jpg";
    document.getElementById("map-index__region").alt="Иллюстрация Витебск";
    }

    function vitebsk() {
      location.replace("vitebsk-region.html")
  };

    function changeHomel(){
    document.getElementById("map-index__region").src="img/belarus/gomel.jpg";
    document.getElementById("map-index__region").alt="Иллюстрация Гомель";
    }

    function gomel() {
      location.replace("gomel-region.html")
  };

    function changeMohilev(){
    document.getElementById("map-index__region").src="img/belarus/mogilev.jpg";
    document.getElementById("map-index__region").alt="Иллюстрация Могилев";
    }

    function mogilev() {
      location.replace("mogilev-region.html")
  };


    function changeBel(){
       document.getElementById("map-index__region").src="img/belarus/belarus.jpg";
       document.getElementById("map-index__region").alt="Васильки";
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
        var numdiv=document.querySelectorAll('body > div').length
    
        $(window).on("resize", function () {
          navMenuTop = navMenu.offset().top;
        });
    
        $(window).on("scroll", function () {
          var winScrollTopValue = $(window).scrollTop(); // насколько проскроллили страницу

          if (winScrollTopValue > navMenuTop) {
            navMenu.addClass("menu_fixed");
            toTop.removeClass("to-top_hiden");
            //document.querySelector('body').style.grid-template-rows='repeat(numdiv,fit-content(100%))';
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