import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
flag=0;
  constructor() { }

  ngOnInit() {
  }
  toggleRound()
    {
      if(this.flag==0)
      {
        this.flag=1;
      }
      else if (this.flag==1)
      {
        this.flag=2;
      }
      else
      {
        this.flag=0;
      }
    }

}


