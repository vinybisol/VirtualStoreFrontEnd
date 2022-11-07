import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidebar/sidenav.component';
import { PagesModule } from './pages/pages.module';
import { AppMaterialModule } from './shared/app-material/app-material.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { BodyComponent } from './components/body/body.component';

@NgModule({
  declarations: [AppComponent, SidenavComponent, HeaderComponent, BodyComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    PagesModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
