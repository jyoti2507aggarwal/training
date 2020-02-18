import { Component, OnInit } from '@angular/core';
import {AdminService} from '../service/admin.service'
@Component({
  selector: 'app-adminviewcustomerpage',
  templateUrl: './adminviewcustomerpage.component.html',
  styleUrls: ['./adminviewcustomerpage.component.css']
})
export class AdminviewcustomerpageComponent implements OnInit {
customerArr;
customerUpdateObj:any={};

//////////////////////input fields
firstname;
lastname;
email;
phone;

  constructor(private admin:AdminService) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers(){
    this.admin.getCustomers().subscribe(res=>this.customerArr=res)
  }
  setUpdate(obj){
    this.customerUpdateObj=obj
  }
  updateCustomer(id){
    this.admin.updateCustomer(this.customerUpdateObj.firstname,this.customerUpdateObj.lastname,this.customerUpdateObj.email,this.customerUpdateObj.phone,id)
  }
}
