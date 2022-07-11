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
import { ComplainComponent } from './Frontend/Components/complain/complain.component';
import { PlansComponent } from './Frontend/Components/plans/plans.component';
import { SignupComponent } from './Frontend/Components/signup/signup.component';
import { PrepaidplansComponent } from './Frontend/Components/prepaidplans/prepaidplans.component';
import { PostpaidplansComponent } from './Frontend/Components/postpaidplans/postpaidplans.component';
import { DongleplansComponent } from './Frontend/Components/dongleplans/dongleplans.component';
import { PaymentComponent } from './Frontend/Components/payment/payment.component';
import { ExistinguserloginComponent } from './Frontend/Components/existinguserlogin/existinguserlogin.component';
import { CustomerloginnavbarComponent } from './Frontend/Components/customerloginnavbar/customerloginnavbar.component';
import { RechargedoneComponent } from './Frontend/Components/rechargedone/rechargedone.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    AdminloginComponent,
    CustomerformComponent,
    AboutusComponent,
    ComplainComponent,
    PlansComponent,
    SignupComponent,
    PrepaidplansComponent,
    PostpaidplansComponent,
    DongleplansComponent,
    PaymentComponent,
    ExistinguserloginComponent,
    CustomerloginnavbarComponent,
    RechargedoneComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
