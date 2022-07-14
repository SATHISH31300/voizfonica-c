import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NewUser } from '../../models/newUser';
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  newuser:NewUser=new NewUser();


  constructor(private servicesService:ServicesService ,private router:Router) { }

  ngOnInit(): void {
  }

  signup(){
    // alert('User Created')
    console.log(this.newuser);
    this.servicesService.signupUser(this.newuser).subscribe (data=>{
      alert("User Created")
      this.router.navigate(['userlogin'])
    },error=>alert("Email Already Exists"));
}
 

}