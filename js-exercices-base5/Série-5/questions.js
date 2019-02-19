/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    return texte.length;
}
var remplaceECar = function (texte) {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " +texte.substr(a + 1 , texte.length);
    return text;
}
var concatString = function (texte1, texte2) {
    let result = texte1 + texte2;
    return result;
}
var afficherCar5 = function (texte) {
    let x = texte.split("");
    return x[4];
}
var afficher9Car = function (texte) {  
    return (texte.substr(0, 9));
}

var majusculeString = function (texte) {
    return (texte.toUpperCase());
}
var minusculeString = function (texte) {
    return(texte.toLowerCase());
}
var SupprEspaceString = function (texte) {
    return (texte.trim());
}
var IsString = function (texte) {
    let x = typeof texte === 'string';
    return x;    
}
var AfficherExtensionString = function (texte) {
    let re =  /(?:\.([^.]+))?$/;
    let ext = re.exec(texte)[1];
    return ext;
}
var NombreEspaceString = function (texte) {
    nbesp = texte.split(' ').length - 1;
    return nbesp;
}
var InverseString = function (texte) {
    return (texte.split('').reverse().join(''));
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return (Math.pow(x, y));
}
var valeurAbsolue = function (nombre) {
    return (Math.abs(nombre));
}
var valeurAbsolueArray = function (array) {
    for(let i=0; i<array.length; i++){
        array[i] = Math.abs(array[i]);
    }
    return array;
}
var sufaceCercle = function (rayon) {
    let surface = Math.PI*rayon*rayon;
    return Math.round(surface);
}
var hypothenuse = function (ab, ac) {
    return Math.sqrt((ab**2)+(ac**2));
}
var calculIMC = function (poids, taille) {
    // poids/(taille*taille)
    return Number(((poids)/(taille**2)).toFixed(2));
}
