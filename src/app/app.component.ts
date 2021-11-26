import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {    
    this.vaccinesInHospitals=[{
      title: 'Covaxin',
      availableDate: new Date(),
      price:1400.99
    },
    {
      title: 'Covishield',
      availableDate: new Date(),
      price:1200.99
    }];

    this.vaccinesFutureReleases=[];
  }
  
  vaccinesInHospitals;
  vaccinesFutureReleases;
  title = 'any-value';  

  twiceno(n: number){
    return n*2;
  }
}
