import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfilComponent } from './components/profil/profil.component';
import { EnfantsComponent } from './components/enfants/enfants.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ROUTES, RouterModule } from '@angular/router';
import { SingleEnfantComponent } from './components/single-enfant/single-enfant.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    ProfilComponent,
    EnfantsComponent,
    SingleEnfantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
