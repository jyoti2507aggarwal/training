import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isDisabled=true;
  a=10;
  public chk=false;

  public arr=[1,2,3,4,5];

  constructor() { }

  ngOnInit() {
  }
  update(){
    this.isDisabled=false;
    this.chk=true;
  }

}


  
  