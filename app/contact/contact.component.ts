import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

msg:string;
  constructor(public user:ContactService) { }

  ngOnInit(): void {
  }


Registers(reg:NgForm){

console.log(reg.value);

this.user.Registerscon(reg.value).subscribe((data:string)=>{

  console.log(data);

  this.msg = data;

reg.reset();

}, (error:any)=>{

    console.log(error);

    this.msg = "Something Went Wrong";

});


}

}