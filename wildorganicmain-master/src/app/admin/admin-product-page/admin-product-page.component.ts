import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-admin-product-page',
  templateUrl: './admin-product-page.component.html',
  styleUrls: ['./admin-product-page.component.css']
})
export class AdminProductPageComponent implements OnInit {
  blog;
  name;
  productDetails;
  additionalDetails;
  listPrice;
  minimumOrderPrice;
  handlingFee;
  shippingFee;
  category;
  SKU;
  featured;
  freeShipping;
  reviewAllowed;
  needChanges;
  active;
  dateAdded;
  url;
  metadata;
  setCategoryArr = [];
  categoryArr;

  constructor(private admin: AdminService) { }

  ngOnInit() {
    this.getCategory();
  }

  createProduct() {
    // console.log(this.blog);
    this.admin.createProduct(this.blog, this.name, this.productDetails, this.additionalDetails, this.listPrice, this.minimumOrderPrice, this.handlingFee, this.shippingFee, this.setCategoryArr, this.SKU, this.featured, this.freeShipping, this.reviewAllowed, this.needChanges, this.active, this.dateAdded, this.url, this.metadata)
  }
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    minHeight: '200px',
  };
  getCategory() {
    this.admin.getCategory().subscribe((res: any) => {
      this.categoryArr = res;
      // console.log(this.categoryArr);
    })
  }
  addCategory(name) {
    let obj = {
      name: name
    }
    this.setCategoryArr.push(obj);
    console.log(this.setCategoryArr);
  }
  deleteCategory(i) {
    this.setCategoryArr.splice(i, 1);
  }

}
