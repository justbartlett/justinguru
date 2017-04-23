import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDv59aLmPzrl_D_tRJ_J-dNCRcd1CT-Dgc",
  authDomain: "justinguru.firebaseapp.com",
  databaseURL: "https://justinguru.firebaseio.com",
  projectId: "firebase-justinguru",
  storageBucket: "firebase-justinguru.appspot.com",
  messagingSenderId: "432190520908"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
