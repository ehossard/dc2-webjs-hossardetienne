let elt = document.getElementById('main');
elt.innerHTML = "<div><li>Element 1</li></div><div><li>Element 2</li></div>";




const newElt = document.createElement("div");
newElt.innerHTML = "<div><li>Element 3</li></div>";
elt.appendChild(newElt);



const myElement = document.createElement("article");

elt.replaceChild(myElement, newElt);