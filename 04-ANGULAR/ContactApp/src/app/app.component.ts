/**
 * Pour déclarer une classe comme
 * composant de notre application,
 * on importe "Component" via
 * @angular/core
 */
import { Component } from '@angular/core';

class Contact {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: object;
  phone?: number;
  website?: string;
  company?: object;
}

/**
 * @Component est ce qu'on appelle un
 * décorateur. Il va nous permettre
 * de définir 3 paramètres essentiels
 * à notre application...
 */
@Component({
  /**
   * Le sélecteur (selector) détermine la
   * manière dont le composant sera affiché
   * dans votre HTML : <app-root></app-root>.
   * Vous devez OBLIGATOIREMENT avoir la balise
   * d'ouverture et de fermeture.
   */
  selector: 'app-root',
  /**
   * "templateUrl" ou "template" est la
   * partie visible du composant. C'est
   * ce qui s'affiche à l'écran lorsque
   * le composant est utilisé.
   */
  templateUrl: './app.component.html',
  /**
   * La déclaration des styles avec
   * "styleUrls" ou "styles[]"
   */
  styleUrls: ['./app.component.css']
  /*template: `
  <h1>Bienvenue aux Mureaux...</h1>
  <h3>Notre ville a du Talent !</h3>
  `,
  styles: [`
    h1 { color: blue; }
  `],*/
})
/**
 * La classe contient les données du
 * composant, mais aussi son comportement.
 * Dans notre contexte MVVM, notre classe
 * correspond au ViewModel.
 */
export class AppComponent {
  // -- Déclaration d'une Variable Titre
  title = 'Gestion de mes Contacts';

  // -- Contact choisi par mon utilisateur
  contactActif: Contact;

  // -- Déclaration d'un Objet Contact
  unContact: Contact = {
    id        :   1,
    name      : 'Hugo LIEGEARD',
    username  : 'hugoliegeard',
    email     : 'wf3@hl-media.fr'
  };
  // -- Tableau de Contacts
  mesContacts: Contact[] = [
    {
      id        :   1,
      name      : 'Hugo LIEGEARD',
      username  : 'hugoliegeard',
      email     : 'wf3@hl-media.fr'
    },
    {
      id        :   2,
      name      : 'Greg D\'HAEM',
      username  : 'gregdhaem',
      email     : 'greg.d@hl-media.fr'
    },
    {
      id        :   3,
      name      : 'Salim SOUMARE',
      username  : 'salimsoumare',
      email     : 'salim.s@hl-media.fr'
    },
    {
      id        :   4,
      name      : 'Cheffia BENALLAL',
      username  : 'cheffiabennallal',
      email     : 'cheffia.b@hl-media.fr'
    }
  ];

  /**
   * Ma fonction choisirContact, prend un contact
   * en paramètre et le transmet à la variable
   * contactActif.
   * @param contactCliqueParMonUtilisateur
   */
  choisirContact(contactCliqueParMonUtilisateur) {
    this.contactActif = contactCliqueParMonUtilisateur;
    console.log(this.contactActif);
  }
}
