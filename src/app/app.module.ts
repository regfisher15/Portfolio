// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouting } from './app.routes';
import { AppComponent } from './app.component'; 

//my components
import { HeaderComponent } from './components/header/header.component';

//my pages
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    //components
    HeaderComponent,

    //pages
    HomeComponent,
  ],

  imports: [
    BrowserModule,
    AppRouting
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
