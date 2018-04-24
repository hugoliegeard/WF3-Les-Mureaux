// -- Initialisation de jQuery (DOM READY)
$(function () {

    // -- Tableau indexé d'objet Contact
    var CollectionDeContacts = [];

    /* --------------------------------------------------------------
                        DECLARATION DES FONCTIONS
    -------------------------------------------------------------- */

    /**
     * Après vérification des informations, la fonction permet
     * d'ajouter un Contact dans notre "CollectionDeContacts",
     * réinitialiser le formulaire et déclencher une notification.
     * @param {*} Contact 
     */
    function ajouterContact(Contact) {

        // -- Ajouter "Contact" dans "CollectionDeContacts"
        CollectionDeContacts.push(Contact);

        // -- On cache la phrase : Aucun Contact.
        $(".aucuncontact").hide();

        // -- Mise à jour du HTML
        $(`
            <tr>
                <td>` + Contact.nom + `</td>
                <td>${ Contact.prenom }</td>
                <td>${ Contact.email }</td>
                <td>${ Contact.tel }</td>
            </tr>
        `).appendTo($('#LesContacts > tbody'));

        // $('<tr><td>'+ Contact.nom + '</td><td>' + Contact.prenom + '</td>...</tr>');

        // -- Réinitialisation du Formulaire
        reinitialisationDuFormulaire();

        // -- Affiche une Notification (BONUS)
        $('.alert-contact').fadeIn().delay(4000).fadeOut();

    }

    /**
     * Réinitialise les champs du Formulaire
     * reset() du Formulaire.
     */
    function reinitialisationDuFormulaire() {

        // -- En jQuery
        $('#contact').trigger('reset');
        // $('#contact').get(0).reset();
        // $('#contact .form-control').val('');

        // -- En Javascript
        // document.getElementById("contact").reset();

    }

    /**
     * Vérifie que l'email respecte
     * bien le bon format.
     * @param {*} email 
     */
    function validateEmail(email) {
        var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return emailReg.test(email);
    }

    /**
     * Vérifie que le numéro de téléphone
     * respecte le format Français
     * @param {*} tel 
     */
    var validateTel = tel => {
        var telReg = new RegExp("(0|\\+33|0033)[1-9][0-9]{8}");
        return telReg.test(tel);
    }

    /**
     * Vérifie si un Contact est présent
     * dans le tableau JS "CollectionDeContacts"
     * @param {*} Contact 
     */
    function unContactEstPresent(Contact) {

        // -- Booleen qui indique la présence d'un contact dans ma collection
        let estPresent = false;

        // -- On parcourt le tableau à la recherche d'une correspondance
        for(let i = 0 ; i < CollectionDeContacts.length ; i++) {

            if(Contact.email === CollectionDeContacts[i].email) {
                // -- Si une correspondance est trouvé "estPresent" passe à VRAI (true)
                estPresent = true;
                // -- On arrête la boucle, plus besoin de poursuivre.
                break;
            }

        }

        // -- On retourne le booleen
        return estPresent;

    }

        /* --------------------------------------------------------------
                        TRAITEMENT DE MON FORMULAIRE
        -------------------------------------------------------------- */

        // -- Détection de la soumission de mon formulaire
        $('#contact').on('submit', function (e) {


            // -- Stopper la redirection de la page
            e.preventDefault();

            // -- Récupération des champs à vérifier
            const nom = $('#nom');
            const prenom = $('#prenom');
            const email = $('#email');
            const tel = $('#tel');

            // -- Vérification des informations
            let MonFormulaireEstValide = true;

            // -- Vérification du Prénom
            if (prenom.val().length === 0) {
                MonFormulaireEstValide = false;
            }

            // -- Vérification du Nom
            if (nom.val().length === 0) {
                MonFormulaireEstValide = false;
            }

            // -- Vérification du Mail
            if (!validateEmail(email.val())) {
                MonFormulaireEstValide = false;
            }

            // -- Vérification du Tel

            /**
             * Si n'est pas valide (!), mon numéro
             * de téléphone, alors mon formulaire
             * est invalide.
             */
            if (!validateTel(tel.val())) {
                MonFormulaireEstValide = false;
            }

            // -- Si toutes mes informations sont valides

            if (!MonFormulaireEstValide) {
                alert('Attention, Veuillez remplir tous les champs !')
            }
            else {

                /**
                 * Si le contact est présent dans la collection, on informe l'utilisateur
                 * Sinon, on peut procéder à la suite du traitement.
                 */
                let Contact = { 
                    "nom"       : nom.val(),
                    "prenom"    : prenom.val(),
                    "email"     : email.val(),
                    "tel"       : tel.val()
                };
                
                if (unContactEstPresent(Contact)){
                    alert('Attention, ce contact existe déjà.');
                    reinitialisationDuFormulaire();
                }
                else{
                    ajouterContact(Contact);
                }
            }
                

        }); // -- Fin de $.submit()

    }); // -- Fin de $()