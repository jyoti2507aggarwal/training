import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  // url = "http://localhost:3000/admin";
  url = "http://ec2-3-15-9-93.us-east-2.compute.amazonaws.com:3000/admin"
  constructor(private http: HttpClient, private router: Router) { }

  setJwt(token) {
    if (token) {
      // token
      localStorage.setItem('admin-token', token);
    }
    else {
      alert('No token Recieved');
    }
  }
  //returns the payload that is the details of user in local storage
  getJwt() {
    let token = localStorage.getItem('admin-token');
    if (token) {
      let payload = token.split('.')[1]
      payload = window.atob(payload)
      // window.atob(res.token)
      return JSON.parse(payload);
    }
    else {
      return null
    }
  }
  //removes jwt auth token from local storage signifing logout
  removeJwt() {
    // window.localStorage.removeItem('admin-token');
    localStorage.removeItem('admin-token');
    // this.router.navigateByUrl('/');
  }
  // this returns the users details form local storage
  getDetails() {
    let details = this.getJwt()
    return details;
  }

  adminRegister(name, email, password) {
    let obj = {
      name: name,
      email: email,
      password: password,
    }
    console.log("Registering");
    this.http.post(`${this.url}/register`, obj).subscribe((res: any) => {
      if (!res.success) {
        alert(res.message)
      }
      else {
        alert(res.message);
        this.router.navigateByUrl('/admin/login');
      }
    })
  }

  adminLogin(email, password) {
    let obj = { email, password: password };
    this.http.post(`${this.url}/login`, obj).subscribe((res: any) => {
      if (res.message) {
        alert(res.message);
      }
      else {
        this.setJwt(res.token);
        console.log(res);
        this.router.navigateByUrl('/admin/category/view');
        alert('logged in');
      }
    })
  }

  //logout User
  logout() {
    this.removeJwt();
    this.router.navigateByUrl('/admin/login');
  }

  createCategory(name, description, url, parentCategory) {
    let obj = {
      name,
      description,
      url,
      parentCategory
    }
    this.http.post(`${this.url}/createCategory`, obj).subscribe((res: any) => {
      alert(res.message);
    });

  }

  getCategory() {
    return this.http.post(`${this.url}/viewCategory`, null);
  }

  updateCategory(_id, name, description, url, parentCategory) {
    let obj = {
      _id, name, description, url, parentCategory
    }
    this.http.post(`${this.url}/updateCategory`, obj).subscribe((res: any) => {
      alert(res.message)
      if (res.success)
        window.location.reload();
    })
  }
  deleteCategory(id) {

    let obj = {
      _id: id
    }
    this.http.post(`${this.url}/deleteCategory`, obj).subscribe((res: any) => {
      alert(res.message);
      if (res.success)
        window.location.reload();
    });
  }

  getAdmins() {
    return this.http.post(`${this.url}/viewAdmin`, null);
  }
  deleteAdmin(_id) {
    let obj = {
      _id
    }
    this.http.post(`${this.url}/deleteAdmin`, obj).subscribe((res: any) => {
      alert(res.message);
      window.location.reload();
    });
  }

  toggleCategoryActive(_id, active) {
    let obj = { _id, active };
    return this.http.post(`${this.url}/toggleCategoryActive`, obj) 
   }
  findCategoryByUrl(url) {
    let obj = { url }
    return this.http.post(`${this.url}/findCategoryByUrl`, obj);
  }
  updateCategorySeo(_id, url, metadata) {
    let obj = { _id, url, metadata };
    this.http.post(`${this.url}/updateCategorySeo`, obj).subscribe((res: any) => {
      alert(res.message);
      if (res.success)
        this.router.navigateByUrl('/admin/category/seo');
    })

  }
  createProduct(blog,name, productDetails, additionalDetails, listPrice, minimumOrderPrice, handlingFee, shippingFee, category, SKU, featured, freeShipping, reviewAllowed, needChanges, active, dateAdded, url, metadata) {
    let obj = {
      blog,name, productDetails, additionalDetails, listPrice, minimumOrderPrice, handlingFee, shippingFee, category, SKU, featured, freeShipping, reviewAllowed, needChanges, active, dateAdded, url, metadata
    }
    this.http.post(`${this.url}/addProduct`, obj).subscribe((res: any) => {
      alert(res.message);
      if (res.success == true)
        this.router.navigateByUrl('/admin/product/view');
    });
  }

  getProduct() {
    return this.http.post(`${this.url}/viewProducts`, null);
  }
  deleteProduct(_id) {
    let obj = { _id }
    this.http.post(`${this.url}/deleteProduct`, obj).subscribe((res: any) => {
      alert(res.message);
      if (res.success == true)
        window.location.reload();
    });
  }
  updateProduct(blog,_id, name, productDetails, additionalDetails, listPrice, minimumOrderPrice, handlingFee, shippingFee, category, SKU, featured, freeShipping, reviewAllowed, needChanges) {

    let obj = { blog,_id, name, productDetails, additionalDetails, listPrice, minimumOrderPrice, handlingFee, shippingFee, category, SKU, featured, freeShipping, reviewAllowed, needChanges }
    // console.log(obj);
    this.http.post(`${this.url}/updateProduct`, obj).subscribe((res: any) => {
      if (res.success == true)
        alert(res.message);
      // window.location.reload();
    })

  }
  createBlog(name, author, description, productName, Blog) {
    let obj = {
      name, author, description, productName, Blog
    }
    this.http.post(`${this.url}/addBLog`, obj).subscribe((res: any) => {
      alert(res.message);
      if (res.success == true)
        this.router.navigateByUrl('/admin/blog/view');
    });
  }

  ///////////////////////////get Specific product by url
  getProductDetails(url) {
    let obj = {
      url
    }
    return this.http.post(`${this.url}/findProductByUrl`, obj)
  }

  getBlog() {
    return this.http.post(`${this.url}/viewBlog`, null);
  }
  deleteBlog(_id) {
    let obj = {
      _id
    }
    this.http.post(`${this.url}/deleteBlogById`, obj).subscribe((res: any) => {
      alert(res.message);
      if (res.success == true)
        window.location.reload();
    })
  }
  /////////////////////////////toggle product
  toggleProductActive(value,id){
    let obj={active:value,_id:id}
    this.http.post(`${this.url}/toggleProductActive`,obj).subscribe(res=>window.location.reload());
  }

  /////////////////////////////update Product Seo
  updateProductSeo(_id, url, metadata) {
    let obj = { _id, url, metadata };
    this.http.post(`${this.url}/updateProductSeo`, obj).subscribe((res: any) => {
      alert(res.message);
      if (res.success)
        this.router.navigateByUrl('/admin/product/seo');
    })

  }
  addContent(content,url,title){
    let obj={
      content,url,title
    }
    this.http.post(`${this.url}/addContentPage`,obj).subscribe((res:any)=>{
      console.log("dlskakldsal");
      if(res.message)
        alert(res.message)
    })
  }
  getContent(){
    let obj=null;
    return this.http.post(`${this.url}/getContentPage`,obj);
  }
  toggleContent(active,id){
    let obj={
      active,id
    }
  return  this.http.post(`${this.url}/toggleActiveContent`,obj)
  }
  //////////////////////////////////////get specific Content
  getContentDetails(url) {
    let obj = {
      url
    }
    return this.http.post(`${this.url}/findContentByUrl`, obj)
  }
  ///////////////////////////////// delete  content

  deleteContentPage(_id){
    let obj={
      _id
    }
    this.http.post(`${this.url}/deleteContentPost`,obj).subscribe((res:any)=>{
      if(res.message){
        alert(res.message);
        window.location.reload();
      }
    })
  }
  ///////////////////////update content seo
  updateContentSeo(_id, url, metadata) {
    let obj = { _id, url, metadata };
    this.http.post(`${this.url}/updateMetaContent`, obj).subscribe((res: any) => {
      alert(res.message);
      if (res.success)
        this.router.navigateByUrl('/admin/content/seo');
    })

  }



  getCustomers(){
    let obj=null;
    return this.http.post(`${this.url}/getCustomers`,obj)
  }

////////////////////updateCustomers
  updateCustomer(firstname,lastname,email,phone,customerId){
    let obj={
      firstname,lastname,email,phone,customerId
    }
    this.http.post(`${this.url}/updateCustomerDetails`,obj).subscribe((res:any)=>{
      if(res.message){
        alert(res.message);
        // window.location.reload();
      }
    })
  }
/////////////////////////////update content
updateContentDetails(_id,title,url){
  let obj={
    _id,
    title,url
  }
  this.http.post(`${this.url}/contentupdateRoute`,obj).subscribe((res:any)=>{
    if(res.message)
    {
      alert(res.message)
      this.router.navigateByUrl('/admin/content/view')
    }
  })
}


///////////////////////////discount create

addDiscount(name,value,type,code,productName,validFrom,validTill){
  let obj= {name,value,type,code,productName,validFrom,validTill}
  console.log(obj.validTill);
  console.log(obj.validFrom);
  console.log(validFrom);
  console.log(validTill);
  this.http.post(`${this.url}/discountAddRoute`,obj).subscribe((res:any)=>{
    if(res.message)
    {
      alert(res.message)
    }
  })
}
/////////////////////discount View all

getdiscountcodes(){
  let obj = null
  return this.http.post(`${this.url}/discountcodeallview`,obj)
}


////////////////////discount view specific

getdiscountspecific(_id){
  let obj = {
    _id
  }
  return this.http.post(`${this.url}/discountviewspecific`,obj)
}
}




