import MyImg from './assets/img/anel2.jpg'

const testTranspile = () => console.log('ES6 Config Funcionando!');

class Generator {
  createParagraph(__string) {
    const textNode = document.createTextNode(__string);
    const paragraphElement = document.createElement('P');
    paragraphElement.appendChild(textNode);
    return paragraphElement;
  }
  createImg(__source, __width, __height) {
    const imgElement = new Image(__width, __height);
    imgElement.src = __source;
    return imgElement;
  }
  createDiv(__innerNode) {
    const divElement = document.createElement('DIV');
    if (__innerNode) {
      divElement.appendChild(__innerNode);
    }
    return divElement;
  }
}
const gen = new Generator;
const par = gen.createParagraph('Hello, Cindy! ƪ(ړײ)ƪ');
const myImg = gen.createImg(MyImg, 250, 400);
const div = gen.createDiv(par);
div.appendChild(myImg);
console.log('This is my image address', MyImg);
document.body.appendChild(div);

testTranspile();