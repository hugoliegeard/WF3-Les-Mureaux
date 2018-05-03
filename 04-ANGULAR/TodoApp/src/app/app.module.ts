import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import {FormsModule} from '@angular/forms';
import {StorageService} from './services/storage/storage.service';
import { TaskFilterPipe } from './pipes/task-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    TaskFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
