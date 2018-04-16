/* ---------------------------------
            LES FONCTIONS 😍
-----------------------------------*/

/**
 * Déclarer une fonction
 * NB : Cette fonction ne retourne
 * aucune valeur et ne prend pas
 * de paramètres.
 */
function Bonjour() {
    alert('Bonjour !');
}

/** 
 * Je vais executer ma fonction "Bonjour"
 * et déclencher ses instructions.
 */
Bonjour();

/**
 * Déclarer une fonction qui prend des
 * variables en paramètre.
 * @param {string} Prenom 
 * @param {string} Nom 
 */
function ditBonjour(Prenom, Nom) {
   
}
/** Appeler / Executer une function avec des paramètres. */
ditBonjour("Hugo", "LIEGEARD");

/* ---------------------
  EXERCICE :
  Créez une fonction permettant d'effectuer l'addition de deux nombres passés en paramètre.
---------------------- */

function addition(nb1, nb2) {
    return nb1 + nb2;
}

document.write("<p>" + addition(10, 5) + "</p>");