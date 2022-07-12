import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { ServicesService } from '../service.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  user:User=new User();

  constructor(private serviceService:ServicesService, private router:Router) { }


  ngOnInit(): void {
  }

  userLogin(){
    console.log(this.user);
    this.serviceService.loginUser(this.user).subscribe(data=>{
      this.router.navigate(['useraccount'])
    },error=>alert("Sorry Please enter correct id and password"));
  }

}