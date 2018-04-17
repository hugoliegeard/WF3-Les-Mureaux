/* ---------------------------------
           LES BOUCLES 💀 ☠️
-----------------------------------*/

// -- La Boucle FOR

/**
 * Pour i égale 0 ; tant que i est strictement
 * inférieur ou égale à 10 ; alors j'incrémente
 * i par pas de 1
 */
for(let i = 0 ; i <= 10 ; i++) {
    document.write('<p>Instruction executée : <strong>' + i + '</strong></p>');
}

document.write('<hr>');

// -- La Boucle While

var j = 0;

/**
 * Tant que j est strictement inférieur ou égale 
 * à 10 ; alors j'execute mes instructions 
 * puis j'incremente j par pas de 1.
 */
while(j <= 10) {
    document.write('<p>Instruction executée : <strong>' + j + '</strong></p>');
    
    // -- ATTENTION A NE PAS OUBLIER L'INCREMENTATION !
    j++;
}

/* -----------------------------
            EXERCICE
------------------------------ */

// -- Supposons le tableau suivant :
var Prenoms = ['Jean', 'Marc', 'Matthieu', 'Luc', 'Pierre', 'Paul', 'Jacques', 'Hugo'];

/**
 * CONSIGNE : Grâce à une boucle FOR, 
 * ffichez la liste des prénoms
 * du tableau ci-dessus dans la console, 
 * ou sur votre page.
 */

 console.log(Prenoms);
 for(let i = 0 ; i < Prenoms.length ; i++) {
    console.log(Prenoms[i]);
 }

 console.log('-----');

 var j = 0;
 while(j < Prenoms.length) {
     console.log(Prenoms[j]);
     j++;
 }

 console.log('For each -----');

 // Boucle ForEach
 Prenoms.forEach(affichePrenom);

 function affichePrenom(valeur, i) {
     console.log(i + ' ' + valeur);
 }

 console.log('For of -----');

 // Boucle For Of
 for(apotre of Prenoms) {
     console.log(apotre);
 }

 /**
  * Pour découvrir toutes les autres possibilités
  * de boucle : https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Boucles_et_it%C3%A9ration
  */

  console.log('Reverse for  -----');

  // -- Boucle inverse
  for(let i = Prenoms.length ; i--; ) {
    console.log(Prenoms[i]);
  }

  // -- https://www.incredible-web.com/blog/performance-of-for-loops-with-javascript/