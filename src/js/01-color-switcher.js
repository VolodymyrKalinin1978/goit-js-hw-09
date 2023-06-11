import refs from './colors/refs';
import {startColorChange, stopColorChange} from './timer/main-logick';
import {getRandomHexColor} from './colors/random-colorHex';
let intervalId = null;

refs.startBtn.addEventListener('click', startColorChange);
refs.stopBtn.addEventListener('click', stopColorChange);



export const changeBackgroundColor = () =>{
  const randomColor = getRandomHexColor();
 
  refs.bodyStyles.style.background = `linear-gradient(to bottom, ${randomColor}, #fff)`;
  refs.bodyStyles.style.backgroundRepeat = 'no-repeat';
  refs.bodyStyles.style.backgroundSize = '100% 100%';
  document.documentElement.style.height = '100%';
  
}





