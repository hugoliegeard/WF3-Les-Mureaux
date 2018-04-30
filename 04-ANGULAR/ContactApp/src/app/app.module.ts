import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormGroup, FormsModule} from '@angular/forms';
import { ProfilComponent } from './profil/profil.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import {HttpClientModule} from '@angular/common/http';
import {ContactApiService} from './services/contact-api.service';


@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent,
    AjouterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ContactApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
