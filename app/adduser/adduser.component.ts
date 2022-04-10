import { Component, OnInit } from '@angular/core';


import { ContactService } from '../contact.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
users:any[]=[];
msg:string;
  constructor(public user:ContactService) { }

  ngOnInit(): void {


    this.user.getpatient().subscribe((data:any[])=>{
      console.log(data);
      this.users=data;
    },(error:any)=>{
      console.log(error);
      this.msg="Something went wrong";
    })
  }
deleteuser(userid:number){
  if(confirm("Are you sure you want to Delete !! ")){
    
    this.user.deleteuserdata(userid).subscribe((data:string)=>{
      this.msg=data;
      var index=this.users.findIndex((obj)=>{
        return obj._id == userid;
      });
      this.users.splice(index,1);
    },(error:any)=>{
      console.log(error);
      this.msg="Something went wrong!";
    });
  
}
}

dosearch(search:string){
this.user.searchuser(search).subscribe((data:any[])=>{
  console.log(data);
  this.users=data;
},(error:any)=>{
  console.log(error);
});
}
}