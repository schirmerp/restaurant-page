
import { buildbtn } from "./index.js";
//import { Food } from "./food.jpeg"

export function frontPage (){

    const render =  (() => {
    
    const frontContent = document.querySelector('body');
    const elementA = document.createElement('div');
    const elementB = document.createElement('div');
    const imgDiv = document.createElement('div');
    //const btn = document.createElement('button');
    
    elementA.className = 'text';
    elementA.innerHTML = 'a wonderful place to grab a byte. dont miss the spaghetti 0s. blah blah blah blahdibbyd da da. Joes was started in 2021. shortly after covid was offically canceled by those elibiable to cancel(individuals known as: "insert chosen pronoun here"). It was meant to be a place simply for joes friends to eat. Then one day joes famous ramen recipe was released via hacker document dumps and the rest is so called history'; 
    frontContent.appendChild(elementA);

    elementB.className = "title"
    elementB.innerHTML = 'JcOdEs Place';
    frontContent.appendChild(elementB);

    imgDiv.innerHTML = '<div id="image"><img src="./food.jpeg" alt="imagine wonderful food picture here:"/></div>';
    imgDiv.className = 'imgDiv'
    frontContent.appendChild(imgDiv);

    
    })();
buildbtn();    
};


/* dumpster:

import Food from './food.jpeg';




  */