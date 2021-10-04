//import './style.css';

import {frontPage} from './front.js';
import {menu} from './menu.js';
import {contact} from './contact.js';


export function buildbtn (){
//dom
const doc = document.querySelector('body');
const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
const btn3 = document.createElement('button');
//page build
btn1.className = 'btn1';
btn2.className = 'btn2';
btn3.className = 'btn3';

btn1.innerHTML = 'home';
btn2.innerHTML = 'menu';
btn3.innerHTML = 'contact us';

doc.appendChild(btn1);
doc.appendChild(btn2);
doc.appendChild(btn3);

btn1.onclick = () => {
    doc.textContent = '';
    frontPage();
}
btn2.onclick = () => {
    doc.textContent = '';
    menu();
}
btn3.onclick = () => {
    doc.textContent = '';
    contact();
}

}

frontPage();


/*
let currentPage;
const page = document.querySelector('body');
page.setAttribute('data', currentPage)


const btn1 = document.createElement('button');
const btn2 = document.createElement('button');

btn1.className = 'btn1';
btn2.className = 'btn2';

let _btn = (x) => {return document.querySelector(x);};
//left off here trying to get buttons to function

btn1.innerHTML = 'menu';
btn2.innerHTML = 'front';

page.appendChild(btn1);
page.appendChild(btn2);

document.querySelector('.btn1').addEventListener('click', frontPage());
_btn('.btn2').addEventListener('click', menuPage());
*/
/*
btn1.onclick = frontPage();//() =>  currentPage = 1;
btn2.onclick = menuPage();//() =>  currentPage = 2;
 */
/*switch (currentPage) {
    case (currentPage == 1):
        frontPage();
        break;
    case (currentPage == 2):
        menuPage();
        break;
}*/