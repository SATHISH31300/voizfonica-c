import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './Frontend/Components/aboutus/aboutus.component';
import { AdminloginComponent } from './Frontend/Components/adminlogin/adminlogin.component';
import { CarouselComponent } from './Frontend/Components/carousel/carousel.component';
import { ComplainComponent } from './Frontend/Components/complain/complain.component';
import { CustomerformComponent } from './Frontend/Components/customerform/customerform.component';
import { CustomerloginnavbarComponent } from './Frontend/Components/customerloginnavbar/customerloginnavbar.component';
import { DongleplansComponent } from './Frontend/Components/dongleplans/dongleplans.component';
import { ExistinguserloginComponent } from './Frontend/Components/existinguserlogin/existinguserlogin.component';
import { PaymentComponent } from './Frontend/Components/payment/payment.component';
import { PlansComponent } from './Frontend/Components/plans/plans.component';
import { PostpaidplansComponent } from './Frontend/Components/postpaidplans/postpaidplans.component';
import { PrepaidplansComponent } from './Frontend/Components/prepaidplans/prepaidplans.component';
import { RechargedoneComponent } from './Frontend/Components/rechargedone/rechargedone.component';
import { SignupComponent } from './Frontend/Components/signup/signup.component';


const routes: Routes = [
  {path:'existinguserlogin', component:ExistinguserloginComponent},
  {path:'Admin Login', component: AdminloginComponent},
  {path:'', component: CarouselComponent},
  {path:'custform', component: CustomerformComponent},
  {path:'aboutus', component: AboutusComponent},
  {path:'bckhome', component:CarouselComponent},
  {path:'plans', component: PlansComponent},
  {path:'signup',component:SignupComponent},
  {path:'complain', component:ComplainComponent},
  {path:'plans/prepaidplans', component:PrepaidplansComponent},
  {path:'plans/prepaidplans/chosen',component:PaymentComponent},
  {path:'plans/postpaidplans', component: PostpaidplansComponent},
  {path:'plans/postpaidplans/chosen', component:PaymentComponent},
  {path:'plans/dongleplans',component:DongleplansComponent},
  {path:'plans/dongleplans/chosen', component:PaymentComponent},
  {path:'existinguserlogin/customerlogin', component:CustomerloginnavbarComponent},
  {path:'existinguserlogin/customerlogin/complain', component:ComplainComponent},
  {path:'home', component:CarouselComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'recharge', component:PlansComponent},
  {path:'paymentcompleted',component:RechargedoneComponent},
  {path:'contactus/usefullink/aboutus', component:AboutusComponent},
  {path:'contactus/usefullink/services', component:PlansComponent},
  {path:'contactus/usefullink/contactus', component: CustomerformComponent}

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
