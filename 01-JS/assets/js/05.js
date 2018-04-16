/* -----------------------------------
    INCREMENTATION & DECREMENTATION 🤖
-------------------------------------*/

// ######## ~ Incrémentation ~ ######## //

var nb1 = 1;
nb1 = nb1 + 1;
nb1 += 1;
/** Ecriture simplifiée */
nb1++; // Toujours par pas de 1

// ######## ~ Décrémentation ~ ######## //

var nb1 = 1;
nb1 = nb1 - 1;
nb1 -= 1;
/** Ecriture simplifiée */
nb1--; // Toujours par pas de 1

// ######## ~ Subtilité ~ ######## //

nb1 = 0;
console.log(nb1++);
console.log(nb1);

nb1 = 0;
console.log(++nb1);