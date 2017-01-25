interface IDomElement {
  print();
}

class DomElement implements IDomElement{
  private list:IDomElement[] = [];
  textContent:string;

  constructor(private tag:string, textContent?: string) { 
    this.list = [];
    this.textContent = textContent;
  }

  add(element:IDomElement) {
    this.list.push(element);
  }

  print() {
    console.log("<" + this.tag + ">");
    if (this.textContent) {
      console.log(this.textContent);
    }
    for (let element of this.list) {
      element.print();
    }
    console.log("</" + this.tag + ">");
  }
}


class TextNode implements IDomElement{
  constructor(private text:string) { }

  print() {
    console.log(this.text);
  }
}





// <html> // DomElement
// <div> // DomElement
// <p> // DomElement
// Hi, I am a TextNode being printed! // TextNode
// </p> // DomElement
// <p> //DomElement
// TextNode == leaf // TextNode
// </p> // DomElement
// </div> // DomElement
// </html> // DomElement


let p1 = new DomElement("p");
let p2 = new DomElement("p");
let div = new DomElement("div");
let html = new DomElement("html");

p1.add(new TextNode("Hi, I am a TextNode being printed!"));
p2.add(new TextNode("TextNode == leaf"));

div.add(p1);
div.add(p2);
html.add(div);

html.print();