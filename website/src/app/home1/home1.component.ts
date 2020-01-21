import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {
flag = 1;
  constructor() { }
  
  ngOnInit() {
  }
  toggleRound()
  {
    if(this.flag==1)
    {
      this.flag=2;
    }
    else if (this.flag==2)
    {
      this.flag=3;
    }
    else
    {
      this.flag=1;
    }
  }

}
