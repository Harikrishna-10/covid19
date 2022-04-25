import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {

 
  msg : string;

  constructor(public user: ContactService, public myRouter : Router) { }

  ngOnInit(): void {
  }

  doLoginadmin(form:NgForm)
  {
    console.log(form.value);

    this.user.userLoginadmin(form.value).subscribe((data:any[])=>{

      

     console.log(data);

     if(data.length==0){
       this.msg="Invalid";
     }else{
       localStorage.setItem("loggeduser",data[0]._id);
       this.myRouter.navigateByUrl("/adduser");
     }
     form.reset();
    },(error:any)=>{
      console.log(error);
      this.msg="something went wrong!!";
    });
    
  }

}
