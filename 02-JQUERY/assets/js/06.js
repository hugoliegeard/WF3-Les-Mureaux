/* --------------------------------
  LES SELECTEURS D'ENFANTS jQUERY
-------------------------------- */

$(function() {

    l = e => console.log(e);

    // -- Je souhaite sélectionner toutes les divs de ma page
    l($('div'));

    // -- Je souhaite sélectionner la balise nav de ma page
    l($('nav'));

    // -- Je souhaite tous les éléments descendants directs (enfants) qui sont dans nav
    l($('nav').children());

    // -- Je souhaite récupérer uniquement les éléments "ul"
    l($('nav').children('ul'));

    // -- Je souhaite récupérer tous les éléments "li" de mon "ul"
    l($('nav').children('ul').find('li'));

    // -- Je souhaite récupérer uniquement le 2ème élément de mes "li"
    l($('nav').find('li').eq(1));

    // -- Je souhaite connaitre le voisin immediat de ma "nav"
    l($('nav').next());
    l($('nav').next().next()); // -- Le voisin du voisin...
    l($('nav').prev()); // -- Le voisin d'avant

    // -- Les parents

    l($('nav').parent());

});