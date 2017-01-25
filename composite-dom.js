var DomElement = (function () {
    function DomElement(tag, textContent) {
        this.tag = tag;
        this.list = [];
        this.list = [];
        this.textContent = textContent;
    }
    DomElement.prototype.add = function (element) {
        this.list.push(element);
    };
    DomElement.prototype.print = function () {
        console.log("<" + this.tag + ">");
        if (this.textContent) {
            console.log(this.textContent);
        }
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var element = _a[_i];
            element.print();
        }
        console.log("</" + this.tag + ">");
    };
    return DomElement;
}());
var TextNode = (function () {
    function TextNode(text) {
        this.text = text;
    }
    TextNode.prototype.print = function () {
        console.log(this.text);
    };
    return TextNode;
}());
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
var p1 = new DomElement("p");
var p2 = new DomElement("p");
var div = new DomElement("div");
var html = new DomElement("html");
p1.add(new TextNode("Hi, I am a TextNode being printed!"));
p2.add(new TextNode("TextNode == leaf"));
div.add(p1);
div.add(p2);
html.add(div);
html.print();
