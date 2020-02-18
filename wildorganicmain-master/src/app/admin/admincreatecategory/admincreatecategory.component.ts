import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-admincreatecategory',
  templateUrl: './admincreatecategory.component.html',
  styleUrls: ['./admincreatecategory.component.css']
})
export class AdmincreatecategoryComponent implements OnInit {

  name;
  description;
  url;
  parentCategory:any='';
  categoryArr;

  constructor(private admin:AdminService) { }

  ngOnInit() {
    this.getCategory()
  }
  createCategory()
  {
    this.admin.createCategory(this.name,this.description,this.url,this.parentCategory);
  }
  getCategory()
  {
    this.admin.getCategory().subscribe(res=>{
      console.log(res);
      this.categoryArr=res;
      this.parentCategory=""
    })
  }
  
}
