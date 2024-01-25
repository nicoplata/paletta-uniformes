/* HAMBURGER MENU ICON & NAVBAR SCROLL FUNCTION   */

document.querySelector('.openMenu').addEventListener('click', animateBars);

var line1 = document.querySelector('.line1');
var line2 = document.querySelector('.line2');
var line3 = document.querySelector('.line3');
var navContainer = document.querySelector('.navContainer')
var darkenBackground = document.getElementById('darkenBackground');
let clicked = false;

function animateBars(){
    line1.classList.toggle('activeline1');
    line2.classList.toggle('activeline2');
    line3.classList.toggle('activeline3');

    if (clicked === false){
        navContainer.style.right = '0px';
        line1.style.background
        darkenBackground.style.display = 'block';
        darkenBackground.style.cursor = 'pointer';
        document.querySelector('.line1').style.background = "black"
        document.querySelector('.line2').style.background = "black"
        document.querySelector('.line3').style.background = "black"
        document.querySelector('.navLink1').style.color = 'black'
        document.querySelector('.navLink2').style.color = 'black'
        document.querySelector('.navLink3').style.color = 'black'
        document.querySelector('.header').style.background = "white";
        document.getElementById("logo").src='./img/logoPaletta.png';
        darkenBackground.addEventListener('click', animateBars);
        clicked = true;
    } else if (clicked === true) {
        navContainer.style.right = '-300px';
        darkenBackground.style.display = 'none';
        document.querySelector('.header').style.background = "";
        document.querySelector('.line1').style.background = "white"
        document.querySelector('.line2').style.background = "white"
        document.querySelector('.line3').style.background = "white"
        document.querySelector('.navLink1').style.color = 'white'
        document.querySelector('.navLink2').style.color = 'white'
        document.querySelector('.navLink3').style.color = 'white'
        document.getElementById("logo").src='./img/palettaWhite.png';
        if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
            document.querySelector('.header').style.background = "white";
            document.querySelector('.header').style.boxShadow = "0px 0px 9px 0px black";
            document.querySelector('.line1').style.background = "black"
            document.querySelector('.line2').style.background = "black"
            document.querySelector('.line3').style.background = "black"
            document.querySelector('.navLink1').style.color = 'black'
            document.querySelector('.navLink2').style.color = 'black'
            document.querySelector('.navLink3').style.color = 'black'
            document.getElementById("logo").src='./img/logoPaletta.png';
        }
        clicked = false;
    } else {
        document.querySelector('.header').style.background = "white";
        clicked = false;
    }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    document.querySelector('.header').style.background = "white";
    document.querySelector('.header').style.boxShadow = "0px 0px 9px 0px black";
    document.querySelector('.line1').style.background = "black"
    document.querySelector('.line2').style.background = "black"
    document.querySelector('.line3').style.background = "black"
    document.querySelector('.navLink1').style.color = 'black'
    document.querySelector('.navLink2').style.color = 'black'
    document.querySelector('.navLink3').style.color = 'black'
    document.getElementById("logo").src='./img/logoPaletta.png';
  } else {
    if( clicked === true ){
        document.querySelector('.line1').style.background = "black"
        document.querySelector('.line2').style.background = "black"
        document.querySelector('.line3').style.background = "black"
        document.querySelector('.navLink1').style.color = 'black'
        document.querySelector('.navLink2').style.color = 'black'
        document.querySelector('.navLink3').style.color = 'black'
    } else {
        document.querySelector('.line1').style.background = "white"
        document.querySelector('.line2').style.background = "white"
        document.querySelector('.line3').style.background = "white"
        document.querySelector('.navLink1').style.color = 'white'
        document.querySelector('.navLink2').style.color = 'white'
        document.querySelector('.navLink3').style.color = 'white'
        document.querySelector('.header').style.background = "";
        document.querySelector('.header').style.boxShadow = "";
        document.getElementById("logo").src='./img/palettaWhite.png';
    }
    document.querySelector('.header').style.boxShadow = "";
  }
}

/* ---------------------------- */