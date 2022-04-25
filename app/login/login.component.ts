import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ContactService } from '../contact.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myimage:string= "assets/blog.jpg";
  msg : string;

  constructor(public user: ContactService, public myRouter : Router) { }

  ngOnInit(): void {
  }

  doLogin(form:NgForm)
  {
    console.log(form.value);

    this.user.userLogin(form.value).subscribe((data:any[])=>{

      

     console.log(data);

     if(data.length==0){
       this.msg="Invalid";
     }else{
       localStorage.setItem("loggeduser",data[0]._id);
       this.myRouter.navigateByUrl("/");
     }
     form.reset();
    },(error:any)=>{
      console.log(error);
      this.msg="something went wrong!!";
    });
    
  }

}
