import { ActivityComponent } from './activity/activity.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { 
    path: 'Derby', 
    component: LoginComponent 
  },
  { 
    path: 'Derby/signup', 
    component: SignupComponent 
  },
  { 
    path: 'Derby/users', 
    component: UsersComponent 
  },
  { 
    path: 'Derby/activity',  
    component: ActivityComponent 
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
