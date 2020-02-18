import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-admin-blog-page-with-buttons',
  templateUrl: './admin-blog-page-with-buttons.component.html',
  styleUrls: ['./admin-blog-page-with-buttons.component.css']
})
export class AdminBlogPageWithButtonsComponent implements OnInit {

  blogArr;
  delete:any={};
  constructor(private admin:AdminService) { }

  ngOnInit() {
    this.getBlog();
  }

  getBlog()
  {
    this.admin.getBlog().subscribe((res:any)=>{
      this.blogArr = res;
      console.log(res);
    })
  }

  setDelete(id,name)
  {
    this.delete._id = id;
    this.delete.name = name;
  }

  deleteBlog()
  {
    this.admin.deleteBlog(this.delete._id);
  }
}
