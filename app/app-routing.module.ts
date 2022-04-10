import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { AdduseradminComponent } from './adduseradmin/adduseradmin.component';
import { AuthGuard } from './auth.guard';
import { ContactComponent } from './contact/contact.component';
import { DistrictComponent } from './district/district.component';
import { EditpatientComponent } from './editpatient/editpatient.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { LogoutComponent } from './logout/logout.component';
import { NewsComponent } from './news/news.component';
import { PatientComponent } from './patient/patient.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"News",component:NewsComponent,canActivate:[AuthGuard]},
  {path:"patient's details" , component:PatientComponent,canActivate:[AuthGuard]},
  {path:"district",component:DistrictComponent,canActivate:[AuthGuard]},
  {path:"contact",component:ContactComponent,canActivate:[AuthGuard]},
  {path:"logout",component:LogoutComponent},
  {path:"adduser",component:AdduserComponent,canActivate:[AuthGuard]},
  {path:"editpatient/:userid",component:EditpatientComponent},
  {path:"adduseradmin",component:AdduseradminComponent,canActivate:[AuthGuard]},
  {path:"loginadmin",component:LoginadminComponent,canActivate:[AuthGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
