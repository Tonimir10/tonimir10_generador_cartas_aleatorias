import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
const figuraList = ['♦', '♥', '♠', '♣'];
const numeroList = ['1','2','3','4','5','6','7','8','9','10','J','Q','K'];

const _getRandom = (array) => {
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

function _setFiguratext(figuraText){
  const figuraTop = document.querySelector(".figura-top");
  const figuraBottom = document.querySelector(".figura-bottom");
  if(figuraText == '♥' || figuraText == '♦'){
    figuraTop.style.color = 'red';
    figuraBottom.style.color = 'red';
  }
  if(figuraText == '♠' || figuraText == '♣'){
    figuraTop.style.color = 'black';
    figuraBottom.style.color = 'black';
  }
   figuraTop.textContent = figuraText;
   figuraBottom.textContent = figuraText;
   return;
}

function _setNumerotext(numeroText){
  const numero = document.querySelector(".number");
  if(numeroText == '10'){
   numero.style.left = '80px';
  }
  if(numeroText != '10'){
    numero.style.left = '110px';
  }
  numero.textContent = numeroText;
  return;
}

const playGame = () => {
  const figuraText = _getRandom(figuraList);
  const numeroText = _getRandom(numeroList);
  _setFiguratext(figuraText);
  _setNumerotext(numeroText);
}

window.playGame = playGame;