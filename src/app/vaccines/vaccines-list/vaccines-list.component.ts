import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaccines-list',
  templateUrl: './vaccines-list.component.html',
  styleUrls: ['./vaccines-list.component.css']
})
export class VaccinesListComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void {

    }

@Input()
vaccines;

remove(index: number){
    this.vaccines.splice(index,1);
}
    

}
