import { buildbtn } from "./index.js";

export function contact(){

    const build = (() => {
    const body = document.querySelector('body');
    const info = document.createElement('div');
    const infoText = document.createElement('h4');

    info.className = 'info';
    info.textContent = 'contact us';
    body.appendChild(info);

    infoText.className = 'infoText';
    infoText.innerHTML = 'Email: shittyresturant@badfood.com<br><br>Phone: 513-411-7460';
    info.appendChild(infoText);

    })();
buildbtn();

} 