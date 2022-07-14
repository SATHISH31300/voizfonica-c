import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
// adminLogin(){
//   console.log(this.user);
//   this.servicesService.loginAdmin(this.user).subscribe(data=>{
//     alert("Login successfull")
//   },error=>alert("Sorry please enter correct id and password"));
// }