/**
 * Permet de vérifier si une adresse email est valide, 
 * en se basant sur une expression régulière.
 * https://goo.gl/YdwQDm
 */
function validateEmail(email) {
    var TestEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return TestEmail.test(email);
}

/**
 * Permet de vérifier le format d'un numéro
 * de téléphone français
 * @param {*} tel 
 */
var validateTel = tel => {
    var telReg = new RegExp("(0|\\+33|0033)[1-9][0-9]{8}");
    return telReg.test(tel);
}

$(function () {

    /**
     * A la soumission de mon formulaire #contact
     * ma fonction anonyme est exécutée avec en paramètre
     * "e" mon événement de type submit.
     */
    $("#contact").submit(function (e) {

        // -- Permet de stopper la redirection HTML.
        e.preventDefault();

        // -- Réinitialiser les erreurs
        $('#contact .has-error').removeClass('has-error');
        $('#contact .help-block').remove();
        $('#contact .alert-danger').remove();

        // -- Récupération des champs du Formulaire
        const nom       = $('#nom');
        const prenom    = $('#prenom');
        const email     = $('#email');
        const tel       = $('#tel');

        // -- Validation du Nom
        if (nom.val().length === 0) { 

            /**
             * Si la valeur saisie par l'utilisateur 
             * dans le champ "nom" est vide, alors 
             * on rajoute la classe 'has-error' 
             * à son parent avec un petit message 
             * d'information. 
             */
            nom.parent().addClass('has-error');
            $("<p class='help-block'>N'oubliez pas de saisir votre nom.</p>").appendTo(nom.parent());
        }
        else {
            nom.parent().addClass('has-success');
        }

        // -- Validation du Prénom
        if (prenom.val().length === 0) {
            prenom.parent().addClass('has-error');
            $("<p class='help-block'>N'oubliez pas de saisir votre prénom.</p>").appendTo(prenom.parent());
        }
        else {
            prenom.parent().addClass('has-success');
        }

        /**
         * On vérifie si l'email saisie par l'utilisateur
         * est valide, grâce à la fonction validateEmail.
         * Elle retourne true si l'adresse email est correct.
         */
        if ( ! validateEmail( email.val() ) ) {

            email.parent().addClass('has-error');
            $("<p class='help-block'>Vérifiez votre adresse email.</p>").appendTo(email.parent());

        }
        else {

            email.parent().addClass('has-success');

        }

        // -- Validation du Téléphone
        if ( ! validateTel( tel.val() ) ) {

            tel.parent().addClass('has-error');
            $("<p class='help-block'>Vérifiez votre numéro de téléphone.</p>").appendTo(tel.parent());

        }
        else {

            tel.parent().addClass('has-success');

        }

        // -- Dans le cas d'une boucle de vérification
        // let ChampsAVerifier = $('#contact input:not([type=submit])');
        // console.log(ChampsAVerifier);
        // for(let i = 0 ; i < ChampsAVerifier.length ; i++) {
        //     if( $(ChampsAVerifier).eq(i).val().length === 0 ) {
        //         ...
        //     }
        // }

        if( $(this).find('.has-error').length === 0 ) {

            $(this).replaceWith(`
                <div class="alert alert-success">
                    Votre contact à bien été transmis !<br>
                    Nous vous répondrons dans les meilleurs délais.
                </div>
            `);

            // -- Submit du Form
            // -- Envoi des données via AJAX
            $('#contact').submit();

        } else {

            $(this).prepend(`
                <div class="alert alert-danger">
                    Nous n'avons pas été en mesure de valider
                    votre contact. Vérifiez vos informations.
                </div>
            `);

        }

    }); // -- Fin du Submit()

}); // -- $()