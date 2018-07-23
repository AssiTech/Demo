import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';


import { AppComponent } from './app.component'; 
import { LoginComponent} from'./Login/login.component';
import {Routes, RouterModule} from '@angular/router';
import { CustomPipe } from './CustomPipe/custompipe.component';
import {StringReverse} from './SecondPipe/secondpipe.component';

 const appRoot: Routes= [
  {path:'login', component:LoginComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomPipe, 
    StringReverse,  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoot)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {} 

