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