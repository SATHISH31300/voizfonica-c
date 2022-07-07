import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from'@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Frontend/Components/navbar/navbar.component';
import { CarouselComponent } from './Frontend/Components/carousel/carousel.component';
import { AdminloginComponent } from './Frontend/Components/adminlogin/adminlogin.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CustomerformComponent } from './Frontend/Components/customerform/customerform.component';
import { AboutusComponent } from './Frontend/Components/aboutus/aboutus.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    AdminloginComponent,
    CustomerformComponent,
    AboutusComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
