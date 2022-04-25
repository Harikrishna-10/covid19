import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-editpatient',
  templateUrl: './editpatient.component.html',
  styleUrls: ['./editpatient.component.css']
})
export class EditpatientComponent implements OnInit {
userData:{_id:number,Name:string,email:string,date:string,Dose:string,Address:string}
  
msg:string;
constructor(public activeRoute:ActivatedRoute,public users:ContactService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((param:Params)=>{
      console.log(param);

      if(param.userid){
        this.users.getsingleuserdata(param.userid).subscribe((data:any[])=>{
          console.log(data);
          this.userData=data[0];
        },(error:any)=>{
          console.log(error);
          
        });
      }
    });
  }

edituser(form:NgForm){
  form.value._id=this.userData._id;
  this.users.editsingledata(form.value).subscribe((data:string)=>{
console.log(data);
this.msg=data
  },(error:any)=>{
    console.log(error);
    this.msg="somethign went wrong!!"
  })
}

}
