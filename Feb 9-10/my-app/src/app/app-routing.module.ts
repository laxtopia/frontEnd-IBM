import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login/login.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [ 

{path:"" , redirectTo: 'main' , pathMatch:"full" } ,
{path:"main" , component: HomeComponent} ,
{path:'home' , component:HomeComponent  }  , 
{path:'about' , component:AboutComponent  } ,
{path:'contact' , component:ContactComponent  } ,
{path:'login' , component:LoginComponent  } ,
{path:'**' , component:TestComponent} ,
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
