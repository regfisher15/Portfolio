// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//my components
//import { HeaderComponent } from './components/header/header.component';

//my pages
//import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
