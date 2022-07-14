import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NewUser } from '../models/newUser';
import { User } from '../models/user';
import { Complains } from '../models/complains';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  // private baseUrl="http://localhost:8090/user/login"
  constructor(private httpClient:HttpClient) { }

  loginUser(user:User):Observable<object>{
    console.log(user)
    return this.httpClient.post("http://localhost:8080/user/userlogin",user);
  }

  loginAdmin(user:User):Observable<object>{
    console.log(user)
    return this.httpClient.post("http://localhost:8080/user/adminlogin",user);
  }


  signupUser(newuser:NewUser):Observable<object>{
    console.log(newuser)
    return this.httpClient.post("http://localhost:8090/user/signup",newuser);

  }

  contactus(complains:Complains):Observable<object>{
    console.log(complains)
    return this.httpClient.post("http://localhost:8080/user/contactus",complains);

  }
}
