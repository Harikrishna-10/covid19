import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public user : ContactService,public myRouter : Router) { }

  ngOnInit(): void {
  }
  doLogout(){
    localStorage.clear();
    this.myRouter.navigateByUrl("/");
  }

}
