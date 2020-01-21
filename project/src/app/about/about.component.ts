import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public isdisabled=true;
  a=20;
  b=30;
  public chk=false;
  public arr=[1,2,3,4,5];


  constructor() { }

  ngOnInit() {
  }
update(){
  this.isdisabled=false;
  this.chk=true;
}
}
