/* ----------------------------
        LA CONCATENATION
------------------------------ */

/** 
 * Aujourd'hui 16/04/2018, sont présent 
 * 12 apprenants.
 * */

 var DebutDePhrase  = "Aujourd'hui ";
 var DateDuJour     = new Date();
 var SuiteDePhrase  = ", sont présents : ";
 var NbApprenants   = 15
 var FinDePhrase    = " apprenants.<br>";

 /**
  * Nous souhaitons maintenant, grâce à la
  * concaténation, afficher tout ce petit monde
  * en un seul morceau.
  */

  document.write(DebutDePhrase + DateDuJour.getDate() + "/" + (DateDuJour.getMonth() + 1) + "/" + DateDuJour.getFullYear() + SuiteDePhrase + NbApprenants + FinDePhrase);

/* ----------------------------------------------
  EXERCICE :
  Créez une concaténation à partir des éléments suivants :  
---------------------------------------------- */

var phrase1 = "Je m'appelle ";
var phrase2 = "Hugo et j'ai ";
var age     = 28;
var phrase3 = " ans !<br>";

document.write(phrase1 + phrase2 + age + phrase3);