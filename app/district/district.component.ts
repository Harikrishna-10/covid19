import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit  {

//   isShowResult=false;
// country='Ariyalur';
// data=[]
//   constructor(public api: ApiService) { }

//   ngOnInit(): void {
//   }

// getweatherbtn(country:string){
//   this.api.getdistrict(country).subscribe((data:any)=>{
//     this.isShowResult=true;
// console.log(data);

// this.data=data;
//   },(err:any)=>{
// console.log(err);
//   },()=>{
//     console.log("Api call completed")
//   });
// }

// getDatebtn(Date:string){
//   this.api.getdate(Date).subscribe((data:any)=>{
//     this.isShowResult=true;
// console.log(data);

// this.result=data;
//   },(err:any)=>{
// console.log(err);
//   },()=>{
//     console.log("Api call completed")
//   });
// }



newdata:any[]=[];
isShowResult=false;
constructor(public api:ApiService){ }
  ngOnInit():void{
    this.pull("all");
  }
  
pull(country:string){
  this.api.getNew(country).subscribe((data:any)=>{
    console.log(data);
    this.isShowResult=true;
   this.newdata=data;
  },(err:any)=>{
      console.log(err);
    },()=>{
      console.log("completed!");
    })
  }
}