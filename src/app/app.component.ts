import { Component } from '@angular/core';

@Component({
  selector: 'namrata',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assimilate Technology';

  number=5;
  name='AssiMilaTe tEchNolOGy';

  
   showData=true;
   names=[
     {name: "Raj", city: "Pune"},
     {name: "Simran", city: "Nagar"},
   ]

   data=[
     {name:'Aish',
     salary:'5000'}
   ]

   position="first";

    myst={
      'color': 'red',
      'font-size':'24px',
    }
    today=new Date(); 

}
