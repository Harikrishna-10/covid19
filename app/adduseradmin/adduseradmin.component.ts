import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-adduseradmin',
  templateUrl: './adduseradmin.component.html',
  styleUrls: ['./adduseradmin.component.css']
})
export class AdduseradminComponent implements OnInit {
users:any[]=[];
msg:string
  constructor(public user:ContactService) { }

  ngOnInit(): void {
    this.user.getuse().subscribe((data:any[])=>{
      console.log(data);
      this.users=data;
    },(error:any)=>{
      console.log(error);
      this.msg="Something went wrong";
    })
  }
  
  dosearch(searc:string){
    this.user.searchuse(searc).subscribe((data:any[])=>{
      console.log(data);
      this.users=data;
    },(error:any)=>{
      console.log(error);
    });
    }

}
