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