import { Node } from "./lib/Node.js";
import { Sprite } from "./lib/Sprite.js";
import {Label} from "./lib/Label.js";
var node = new Node();
console.log(node);
node.width = 100;
node.height = 100;
//debug
node.elm.style.border = "1px solid red";
document.body.appendChild(node.elm);
var label = new Label("hello");
//var bg = new Sprite("./img/trucxanh_bg.jpg");
//node.addChild(bg);
node.addChild(label);


