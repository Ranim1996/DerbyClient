import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';

import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';

import { DeleteuserComponent } from './users/deleteuser/deleteuser.component';
import { UpdateuserComponent } from './users/updateuser/updateuser.component';
import { ActivityComponent } from './activity/activity.component';
import { DeleterequestComponent } from './activity/deleterequest/deleterequest.component';
import { UpdaterequestComponent } from './activity/updaterequest/updaterequest.component';
import { AddrequestComponent } from './activity/addrequest/addrequest.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    DeleteuserComponent,
    UpdateuserComponent,
    ActivityComponent,
    DeleterequestComponent,
    UpdaterequestComponent,
    AddrequestComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatDividerModule,
    AppRoutingModule,
    MatToolbarModule,
    MatListModule,
    MatDialogModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
