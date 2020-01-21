import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  a=false;
  interpolation="This is text inside variable to show interpolation";
  array=["welcome","","to","Website"];

  constructor() { }

  ngOnInit() {
  }
  enter()
  {
    if(this.a==true)
    {
      this.a=false;
    }
    else{
      this.a=true;
    }
  }

}
