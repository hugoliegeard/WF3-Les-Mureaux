// -- Initialisation de jQuery
$(function() {

    // -- Je vais écouter l'évènement change sur le champ input.
    // https://lodash.com/docs/4.17.4#debounce
    // https://stackoverflow.com/questions/15927371/what-does-debounce-do
    // https://www.grafikart.fr/tutoriels/javascript/debounce-throttle-642
    // $('#search').on('change', function(e) {
    $('#search').on( 'input', _.debounce( function(e) {

        // -- Je récupère la valeur saisie par mon utilisateur
        let search  = $('#search').val();
        let regex   = new RegExp(search, 'i');

        // -- Vérification dans la console
        // console.log(search);

        $('.resultat').slideUp();

        if(search.length > 0) {

            $.getJSON('https://jsonplaceholder.typicode.com/users', function(contacts) {
                
                // -- Je parviens bien à récupérer mes contacts
                // console.log(contacts);  

                // -- Je peux maintenant parcourir mes contacts
                // for(let i = 0 ; i < contacts.length ; i++) {

                //     let contact = contacts[i];
                //     // console.log(contact);

                //     /**
                //      * Je souhaite vérifier si un username saisie par l'utilisateur
                //      * correspond à une valeur string de mon "contact"
                // //      */
                //     if(contact.username === search || contact.name === search 
                //         || contact.email === search || contact.phone === search) {
                // OU
                // if(regex.test(contact.email) || regex.test(contact.name)) {
        

                //         console.log(contact.username + ' a été trouvé !');
                //         break;

                //     } // endif
                    
                // } // endfor

                // -- Je filtre mon tableau de "contacts" pour ne garder que ceux pour lesquel je trouve une correspondance.
                let resultat = _.filter(contacts, contact => {
                    return regex.test(contact.username) || regex.test(contact.email)
                        || regex.test(contact.phone) || regex.test(contact.name);
                });

                // console.log(resultat);
                // -- Je vide mes résultats avant d'afficher les nouveaux.
                // -- De cette façon j'évite d'additionner toutes mes recherches
                $('.resultat').empty();

                _.forEach(resultat, contact => {

                    $(`
                        <div class="membre">
                            <div class="membre_informations">
                                <p>Nom Complet : ${ contact.name }</p>
                                <p>Username : ${ contact.username }</p>
                                <p>Email : ${ contact.email }</p>
                                <p>Téléphone : ${ contact.phone }</p>
                            </div>
                        </div>
                    `).appendTo($('.resultat'));

                }) // ()endforEach

                $('.resultat').unmark().mark(search);
                $('.resultat').slideDown();

            }); // $.getJSON

        } // endif search > 0

    }, 500 )); // .on('change') ._debounce()

}); // $(function())