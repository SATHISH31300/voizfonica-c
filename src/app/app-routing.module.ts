import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './Frontend/Components/aboutus/aboutus.component';
import { AdminloginComponent } from './Frontend/Components/adminlogin/adminlogin.component';
import { CarouselComponent } from './Frontend/Components/carousel/carousel.component';
import { ComplainComponent } from './Frontend/Components/complain/complain.component';
import { CustomerformComponent } from './Frontend/Components/customerform/customerform.component';
import { PlansComponent } from './Frontend/Components/plans/plans.component';


const routes: Routes = [
  {path:'Admin Login', component: AdminloginComponent},
  {path:'', component: CarouselComponent},
  {path:'custform', component: CustomerformComponent},
  {path:'aboutus', component: AboutusComponent},
  {path:'bckhome', component:CarouselComponent},
  {path:'plans', component: PlansComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
