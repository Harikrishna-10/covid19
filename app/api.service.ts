import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { 
    console.log("service created!!");
  }
    getNews(newsCat:string){
      return this.http.get<any>("https://newsapi.org/v2/everything?q=covid19&sortBy=publishedAt&apiKey=4a52fc9322914bcba8ed6859a1d8c342");
    }


    // getdistrict(country:string){

    //   return this.http.get<any>("https://raw.githubusercontent.com/Harikrishna-10/district5/main/Ariyalur.json");
    //  }
    //  getdate(Date:string){
    //    return this.http.get<any>("https://raw.githubusercontent.com/Harikrishna-10/district5/main/"+Date+".json")
    //  }

    getNew(country:string){
      console.log(country);

      if(country=="all")
      {
        return this.http.get<any>("https://data.covid19india.org/state_district_wise.json");
      }
      else{
        return this.http.get<any>("https://raw.githubusercontent.com/Harikrishna-10/district5/main/"+country+".json")
      }
    }
    
    
  }
