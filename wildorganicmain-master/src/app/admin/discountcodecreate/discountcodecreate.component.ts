import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-discountcodecreate',
  templateUrl: './discountcodecreate.component.html',
  styleUrls: ['./discountcodecreate.component.css']
})
export class DiscountcodecreateComponent implements OnInit {
  name;
  value;
  type;
  productName;
  validFrom;
  validTill;
  code;
  constructor( private admin:AdminService) { }

  ngOnInit() {
  }

  discountadd(){
  console.log(this.validTill)
    this.admin.addDiscount(this.name,this.value,this.code, this.type,this.productName,this.validFrom,this.validTill)

  }

}
