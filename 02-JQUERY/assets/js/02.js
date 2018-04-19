/* ----------------------
  LES SELECTEURS jQUERY
----------------------- */

// -- Format : $('selecteur')
// -- En jQuery, tous les sélecteurs CSS sont disponibles...

$(function() {

    l = e => console.log(e);

    // -- Sélectionner toutes les balises SPAN
    l(document.getElementsByTagName('span'));
    l($('span'));

    // -- Sélectionner mon menu grâce à son ID
    l(document.getElementById('menu'));
    l($('#menu'));

    // -- Sélectionner un élément par sa classe...
    l(document.getElementsByClassName('MaClasse'));
    l($('.MaClasse'));

    // -- Selectionner un Attribut
    l($('[href="#"]'));

});
