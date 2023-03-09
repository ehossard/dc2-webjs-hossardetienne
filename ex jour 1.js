let elt = document.getElementById('main');
elt.innerHTML = "<div><li>Element 1</li></div><div><li>Element 2</li></div>";




const newElt = document.createElement("div");
newElt.innerHTML = "<div><li>Element 3</li></div>";
elt.appendChild(newElt);



const myElement = document.createElement("article");

elt.replaceChild(myElement, newElt);




let objJson = {
    marque : "dyson",
    matière : "bois",
    tauxAbsorbtion : 80,
    taille : "L"
}
let objLinea = JSON.stringify(objJson);
localStorage.setItem("serpillère", objLinea);


objLinea = localStorage.getItem("serpillère");
objJson = JSON.parse(objLinea);