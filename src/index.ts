/*var tag = document.createElement("p");
var text = document.createTextNode("my nicknames: catafest and mythcat");
tag.appendChild(text);
var element = document.getElementById("new");
element.appendChild(tag);
*/

// 1. Select the div element using the id property
const app = document.getElementById("app");
// 2. Create a new <p></p> element programmatically
const p = document.createElement("p");
// 3. Add the text content
p.textContent = "Hello, World!";
// 4. Append the p element to the div element
app?.appendChild(p);

console.log("This is a test !");
