import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { DevelopmentComponent } from './components/development/development.component';
import { ProductionComponent } from './components/production/production.component';
import { ConsultingComponent } from './components/consulting/consulting.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './components/contacts/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DevelopmentComponent,
    ProductionComponent,
    ConsultingComponent,
    AboutComponent,
    ContactsComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'development', component: DevelopmentComponent },
      { path: 'production', component: ProductionComponent },
      { path: 'consulting', component: ConsultingComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contacts', component: ContactsComponent },
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCBjr9B1WSJrZ9pdt1RgxkKnSduvqh2V1M'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
