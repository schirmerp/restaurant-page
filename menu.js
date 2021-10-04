import { buildbtn } from "./index.js";

export function menu(){

let myMenu = [];


class MenuItem {
    constructor(item, description){
    this.item = item;
    this.description = description;
    
    this.info = () => {
    return '' + this.item + '<br><br>' + this.description;//`${this.item} <br> ${this.description}`;
    };
    this.load = () => {
            myMenu.push(this.info);
            return myMenu;
        };
    };
};

//menu
const spaghetti = new MenuItem('spaghetti', 'noodles and Os in a classic sauce');
const steak = new MenuItem('steak', 'whatever cut of beef we could find cooked however its cooked');
const cereal = new MenuItem('cereal', 'milk and your favorite(or whatever we have) form of puffed rice');
const chickenD= new MenuItem('Chicken and Dumplings', 'House special! Chicken removed. Can be added back in for an additional chare');

spaghetti.load();
steak.load();
cereal.load();
chickenD.load();



//page builder
const build = (() => {
    const content = document.createElement('div');
    content.className = 'content';

 for (let i=0; i< myMenu.length; i++){
        new function render(){
        
        const elementC = document.createElement('div');
      
        elementC.className = 'menu-item';
        elementC.innerHTML = myMenu[i]();
        content.appendChild(elementC);
        document.querySelector('body').appendChild(content);
        };
    };
 })();
 buildbtn();
};


    
 //   let menu = document.querySelector('.menu');
// add item to menu div
 /*   for (key in MenuItem)  {
        const box = document.createElement('div');
        box.className = 'menu-item';
        box.innerHTML = `${MenuItem.item} <br> ${MenuItem.description}`
        elementC.appendChild(box);
    };*/
/*function render(){
       for (let i=0; i<MenuItem.length; i++){
        createMenu(MenuItem[i]);
    };
}*/

   /* const createMenu = (item) => {
        const menu = document.querySelector('body');
        const menuDiv = document.createElement('div')
        const titleDiv = document.createElement('h4')
        const descriptionDiv = document.createElement('h4')
        
        //const pageDiv = document.createElement('h5')
        //const readButton = document.createElement('button')
        //const removeButton = document.createElement('button')
    
        menuDiv.classList.add('menu')
        
    
        titleDiv.classList.add('title')
        titleDiv.textContent = MenuItem.item
        menuDiv.appendChild(titleDiv)
    
        descriptionDiv.classList.add('author')
        descriptionDiv.textContent = MenuItem.description
        menuDiv.appendChild(descriptionDiv)

        menu.appendChild(menuDiv)
        return menu;
    };*/




/*code edit pile:
//create menu div
  function render(){  
    for (let i=0; i<MenuItem.length; i++){
        const box = document.createElement('div');
        box.className = 'menu-item';
        box.innerHTML = '' + MenuItem.item + '<br>' + MenuItem.description;
        elementC.appendChild(box);
    };
}

 const getMenu = () => {
    for (key in MenuItem){
        addToMenu(item);
        return menu;
     };
    };
   function addToMenu(menuItem) {
        menu[menu.length] = menuItem;
        render()
        return menu
    }

*/