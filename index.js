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
    document.getElementById("tit-princ").style = "font-family: " + type + ", Helvetica, sans-serif; font-size:" +taille  +"px;";
    document.getElementById("tit1").style = "font-family: " + type + ", Helvetica, sans-serif; font-size:" +taille +"px;";
    document.getElementById("info1").style = "font-family: " + type + ", Helvetica, sans-serif; font-size:" +taille +"px;";
    document.getElementById("tit2").style = "font-family: " + type + ", Helvetica, sans-serif; font-size:" +taille +"px;";
    document.getElementById("info2").style = "font-family: " + type + ", Helvetica, sans-serif; font-size:" +taille +"px;";
    document.getElementById('plugin').style.display = 'none';
});


// Carte et sa déscription
let Carte = true;

let div_img = document.getElementById("images");
div_img.style = "display : flex; flex_direction: row;margin-bottom:20px";

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
desc.innerHTML = "Voici une carte représentant les routes du Loir-et-Cher. On peut voir en haut à droit la ville d'Orléans reliée au nord par une autoroute. Cette autoroute traverse Orléans et descend au sud jusqu'à Merzon ou elle se sépare en deux. Orléans est aussi reliée a Tours, se trouvant en bas a gauche de l'image, par une autoroute. Les villes de Tours et Merzon sont quant à elles reliées par une route departementale.";
desc.style = "height : 400px;width : 400px; z-index = 100; display:none;font-size : 55px";

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


