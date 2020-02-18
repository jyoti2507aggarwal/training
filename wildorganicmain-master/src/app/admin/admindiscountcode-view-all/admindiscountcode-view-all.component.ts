import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admindiscountcode-view-all',
  templateUrl: './admindiscountcode-view-all.component.html',
  styleUrls: ['./admindiscountcode-view-all.component.css']
})
export class AdmindiscountcodeViewAllComponent implements OnInit {
  discountCodeArr;
  
  constructor(private admin:AdminService , private route:ActivatedRoute) {

   }

  ngOnInit() {
    this.getDicountCodes();
  }

  getDicountCodes()
  {
    this.admin.getdiscountcodes().subscribe((res:any)=>{
      this.discountCodeArr = res;
      console.log(this.discountCodeArr)
    })
  }



}
