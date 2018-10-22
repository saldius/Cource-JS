'use strict';

 class Options {
  constructor(height = '350px', 
              width = '350px', 
              bg = 'green', 
              fontSize = '20px', 
              textAlign = 'left') {

    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
  }

  createNewDiv() {

    let div = document.createElement('div');
    
    div.textContent = 'Текст как текст div.';
    div.style.cssText="background-color: " + this.bg + "; \ \
    width: " + this.width + "; \
    height: " + this.height + "; \
    font-size: " + this.fontSize+"; \
    text-align: " + this.textAlign + "; \
  ";
  document.body.appendChild(div);
  }
}

const square = new Options(undefined, undefined, 'green');

square.createNewDiv();
  class NewObj {
  createObj()  {
     let obj = {
        search: function() {
          let element = document.querySelector('div');
        }
     };
      obj.search();
  }
}

let example = new NewObj();
example.createObj();