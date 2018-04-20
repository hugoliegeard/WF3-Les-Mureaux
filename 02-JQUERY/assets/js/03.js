/* -----------------------------------
  LE CHAINAGE DE METHODE AVEC JQUERY
------------------------------------ */

$(function() {

    console.log($('div'));

    // -- Je souhaite cacher toutes les div de ma page HTML
    $('div').hide('slow', function() {

        /**
         * Une fois que la méthode hide() est terminée,
         * mon alerte peut s'executer !
         * 
         * NOTA BENE : La fonction s'executera pour
         * l'ensemble des éléments du sélecteur.
         */

        // alert('Fin du Hide');

        // $('div').css('background','yellow');
        // $('div').css('color','red');
        // $('div').show('slow');

        $('p').hide(1000).css('color','blue').css('font-size','20px').delay(2000).show(500);

        $('p').hide(1000).css({'color':'blue', 'font-size':'20px'}).delay(2000).show(500);

    }); // -- Fin du hide()

}); // -- Fin de $()