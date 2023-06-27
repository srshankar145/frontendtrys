// const fstPara = document.querySelector("p");
// fstPara.style.backgroundColor = "#FFEADD";

const allPara = document.querySelectorAll(".paragraph");
// allPara.style.backgroundColor = "#FFEADD"; //will return error since querySelectorAll is nodelist
//so we have to access it using index.
console.log(allPara.length);
// allPara[0].style.backgroundColor = "#FFEADD";
// allPara[1].style.backgroundColor = "red";
// allPara[1].style.color = "yellow";
// allPara[2].style.backgroundColor = "yellow";

//or we need to loop thru nodelist.
for (i = 0; i < allPara.length; i++) {
  allPara[i].style.backgroundColor = "#FFEADD";
}

//tried using getElementById   === for Example 2
const box = document.getElementById("box");
console.log("main div element", box);
console.log("Children Nodes: ", box.children); //Children is HTMLCollection
console.log("ChildNodes:", box.childNodes); //ChildNodes is nodelist

//tried using querySelectorAll for same id
const boxCollection = document.querySelectorAll("#box");
console.log("Trying with HTML Colletion", boxCollection);
console.log("HTML Colletion children", boxCollection.children);
console.log("HTML Colletion children", boxCollection.childNodes);

//Live HTMLCollection === for Example 3
const boxWrapper = document.getElementById("box-wrapper");
const boxes = boxWrapper.getElementsByClassName("box");
console.log("HTMLCollection boxes length:", boxes.length);

const newEle = document.createElement("div");
newEle.classList.add("box");
newEle.innerHTML = "box 5";
boxWrapper.appendChild(newEle);
console.log("After append boxes length:", boxes.length);

//Static NodeList
const boxes2 = document.querySelectorAll(".box");
console.log(boxes2.length);

const newEle2 = document.createElement("div");
newEle2.classList.add("box");
console.log("after adding box to clsslist:", newEle2);
newEle2.innerHTML = "box 6";
console.log("after adding innherHTML: ", newEle2);
boxWrapper.appendChild(newEle2);
console.log("length of boxes2:", document.querySelectorAll(".box").length);

//Example 4
const all3Elements = document.querySelectorAll("h3, .element2, span");
for (let i = 0; i < all3Elements.length; i++) {
  all3Elements[i].style.border = "2px dotted green";
}

//Example 5 without HTML we can create para using only Javascript. actually
// we can create any element using javascript.
const para2 = document.createElement("p");
para2.innerText = "This is a testing paragraph always appended at end of Body";
para2.style.color = "seagreen";
para2.style.fontSize = "24px";
document.body.appendChild(para2); //appending to body which will append this in last.

const para3 = document.createElement("h4");
para3.innerText = "Just a H4 tyring text";
para3.style.fontStyle = "oblique";
para3.prepend("Adding at the beginning of the para. ");
para3.append(" end of the para.");
document.getElementById("multielements").appendChild(para3);

document
  .getElementById("multielements")
  .append("Ending of multielement div container ");

document
  .getElementById("multielements")
  .prepend("Starting of the multielement div");

document.getElementById("multielements").style.color = "#090580";

// Example 6
const liItem = document.createElement("li"); //tag
const txtCont = document.createTextNode("IceApple"); //Text Content
const myList = document.getElementById("myList"); // Getting mylist ul from html
liItem.appendChild(txtCont); //create a single list item
console.log("liItem:", liItem, "TxtCont:", txtCont);
myList.insertBefore(liItem, myList.children[3]);

//Example 7 remove element.
const rmEle = document.querySelector(".third");
rmEle.remove(); //Will remove the third paragraph

const rmdiv2 = document.getElementById("box");
// rmdiv2.remove(rmdiv2.firstElementChild);
rmdiv2.parentElement.removeChild(rmdiv2);
