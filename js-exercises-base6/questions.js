var CreationTableauLangages = function () {
    let langages = ['Html', 'CSS', 'Java', 'PHP'];
    return langages;
}

var CreationTableauNombres = function () {
    let nombre = [0, 1, 2, 3, 4, 5];
    return nombre;
}

var RemplacementElement = function (langages) {
    let remplace = langages.splice(2, 1, "Javascript");
    return langages;
}

var AjoutElementLangages = function (langages) {
    let ajoute = langages.splice(4, 0, "Ruby", "Python");
    return langages;
}

var AjoutElementNombres = function (nombres) {
    let ajoute = nombres.splice(0, 0, -2, -1);
    return nombres;
}

var SuppressionPremierElement = function (langages) {
    let supprime = langages.splice(0, 1);
    return langages;
}

var SuppressionDernierElement = function (langages) {
    let supprime = langages.splice(4, 1);
    return langages;
}

var ConversionChaineTableau = function (reseaux_sociaux_chaine) {
    let reseaux_sociaux = reseaux_sociaux_chaine.split(",");
    return reseaux_sociaux; 
}

var ConversionTableauChaine = function (langages) {
        let langages_chaine = langages.toString(",");
        return langages_chaine;
}

var TriTableau = function (reseaux_sociaux) {
    return reseaux_sociaux.sort();
}

var InversionTableau = function (reseaux_sociaux){
    return reseaux_sociaux.reverse();
}
