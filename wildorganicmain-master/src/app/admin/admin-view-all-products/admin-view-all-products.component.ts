import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-admin-view-all-products',
  templateUrl: './admin-view-all-products.component.html',
  styleUrls: ['./admin-view-all-products.component.css']
})
export class AdminViewAllProductsComponent implements OnInit {
  blog = "fghjk";
  search;
  order:String='name';
  reverse: boolean = false;

  productArr;
  productId;
  productUpdate:any;
  updateFlag=true;
  categoryArr;
  setCategoryArr=[];
  constructor(private admin:AdminService) { }

  ngOnInit() {
    this.getProducts();
    this.getCategory();
  }
  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      minHeight: '200px',
};
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
  
    this.order = value;
  }
  getProducts()
  {
    this.admin.getProduct().subscribe((res:any)=>{
      this.productArr = res;
      console.log(res)
      this.productUpdate = this.productArr[0];
      // this.setCategoryArr=this.productArr[0]
    })
  }
  getCategory()
  {
    this.admin.getCategory().subscribe((res:any)=>{
      this.categoryArr = res;
      // console.log(this.categoryArr);
    })
  }
  setDelete(_id)
  {
    this.productId = _id
  }
  deleteProduct()
  {
    this.admin.deleteProduct(this.productId);
  }
  setUpdate(obj)
  {
    this.productUpdate = obj; 
    console.log(this.productUpdate);
    this.blog=obj.blog,
    this.setCategoryArr=obj.category
  }
  updateProduct(id)
  {
    this.admin.updateProduct(
      this.blog,
      id,
      this.productUpdate.name,
      this.productUpdate.productDetails,
      this.productUpdate.additionalDetails,
      this.productUpdate.listPrice,
      this.productUpdate.minimumOrderPrice,
      this.productUpdate.handlingFee,
      this.productUpdate.shippingFee,
      this.setCategoryArr,
      this.productUpdate.SKU,
      this.productUpdate.featured,
      this.productUpdate.freeShipping,
      this.productUpdate.reviewAllowed,
      this.productUpdate.needChanges,
      
    )
  }
  addCategory(name){
    let obj={
      name:name
    }
    this.setCategoryArr.push(obj);
    console.log(this.setCategoryArr);
  }
  deleteCategory(i){
    this.setCategoryArr.splice(i,1);
  }
}

