// Bouton pour activer le plugin
document.getElementById('bouton').addEventListener('click', function() {
    document.getElementById('plugin').style.display = 'block';
});

// Bouton pour le désactiver sans modifications
document.getElementById('bouton-croix').addEventListener('click', function() {
    document.getElementById('plugin').style.display = 'none';
});

// Bouton pour faire les modifications
document.getElementById('bouton-save').addEventListener('click', function() {
    var taille = document.getElementById("input-taille").value;
    var type = document.getElementById("input-type").value;
    document.getElementById("tit-princ").style = "font-family: " + type + ", Helvetica, sans-serif; font-size:" +taille +";";
    document.getElementById("tit1").style = "font-family: " + type + ", Helvetica, sans-serif; font-size:" +taille +";";
    document.getElementById("info1").style = "font-family: " + type + ", Helvetica, sans-serif; font-size:" +taille +";";
    document.getElementById("tit2").style = "font-family: " + type + ", Helvetica, sans-serif; font-size:" +taille +";";
    document.getElementById("info2").style = "font-family: " + type + ", Helvetica, sans-serif; font-size:" +taille +";";
    document.getElementById('plugin').style.display = 'none';
});


// Carte et sa déscription
let Carte = true;

let div_img = document.getElementById("images");
div_img.style = "display : flex; flex_direction: row;";

let image = document.createElement("img");
image.src = "./images/Carteroute41.png";
image.style = "height : 400px;width : 400px; z-index = 200; display:block;";

let inter_div1 = document.createElement("div");
inter_div1.style = " z-index = 200; display:block;"

let toDescription = document.createElement("button");
toDescription.id = 'toDescription';
toDescription.textContent = "Afficher la description";
toDescription.style = "margin-left: 10px;";

div_img.appendChild(image);
inter_div1.appendChild(toDescription);
div_img.appendChild(inter_div1);


let desc = document.createElement("p");
desc.innerHTML = "Voici une carte représentant les routes du Loir-et-Cher";
desc.style = "height : 400px;width : 400px; z-index = 100; display:none;";

let inter_div2 = document.createElement("div");
inter_div2.style = "z-index = 100; display:none;";

let toCarte = document.createElement("button");
toCarte.id = 'toCarte';
toCarte.textContent = "Afficher la carte";
toCarte.style = "margin-left: 10px;";

inter_div2.appendChild(toCarte);
div_img.appendChild(desc);
div_img.appendChild(inter_div2);


document.getElementById('toDescription').addEventListener('click', function() {
    image.style = "display : none;"
    inter_div1.style = "display : none;"

    desc.style = "height : 400px;width : 400px; z-index = 100; display:block;margin-top : 0px; margin-bottom :0px;"
    inter_div2.style = "display : block;"
});
document.getElementById('toCarte').addEventListener('click', function() {
    desc.style = "display : none;"
    inter_div2.style = "display : none;"

    image.style = "height : 400px;width : 400px; z-index = 200; display:block;"
    inter_div1.style = "display : block;"
});
// document.getElementById('buton').addEventListener('click', function() {
//    // Carte et sa déscription
//    if (!Carte) {
//     div_img.removeChild(desc);
//     div_img.removeChild(inter_div2);

//     div_img.appendChild(image);
//     div_img.appendChild(inter_div1);

//     Carte = true;
//    } else if (Carte){
//     div_img.removeChild(image);
//     div_img.removeChild(inter_div1);

//     div_img.appendChild(desc);
//     div_img.appendChild(inter_div2);

//     Carte = false;
//    }
// })

