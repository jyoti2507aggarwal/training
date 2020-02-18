import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmincreatecategoryComponent } from './admin/admincreatecategory/admincreatecategory.component';
import { AdminmailtemplateComponent } from './admin/adminmailtemplate/adminmailtemplate.component';
import { AdminviewmailtemplateComponent } from './admin/adminviewmailtemplate/adminviewmailtemplate.component';
import { AdminviewcategorydetailsComponent } from './admin/adminviewcategorydetails/adminviewcategorydetails.component';
import { AdminregisterComponent } from './admin/adminregister/adminregister.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminloginauthService } from './admin/service/adminloginauth.service';
import { AdminlogoutauthService } from './admin/service/adminlogoutauth.service';
import { AdminviewpageComponent } from './admin/adminviewpage/adminviewpage.component';
import { AdmindeleteadminComponent } from './admin/admindeleteadmin/admindeleteadmin.component';
import { AdmincategoryactiveComponent } from './admin/admincategoryactive/admincategoryactive.component';
import { AdmincategorychangeseoComponent } from './admin/admincategorychangeseo/admincategorychangeseo.component';
import { AdmincategorymetataginputComponent } from './admin/admincategorymetataginput/admincategorymetataginput.component';
import { AdminProductPageComponent } from './admin/admin-product-page/admin-product-page.component';
import { AdminViewAllProductsComponent } from './admin/admin-view-all-products/admin-view-all-products.component';
import { AdminViewProductDetailsComponent } from './admin/admin-view-product-details/admin-view-product-details.component';
import { AdmincreateblogComponent } from './admin/admincreateblog/admincreateblog.component';
import { AdminBlogPageWithButtonsComponent } from './admin/admin-blog-page-with-buttons/admin-blog-page-with-buttons.component';
import { AdminViewAllProductsActiveComponent } from './admin/admin-view-all-products-active/admin-view-all-products-active.component';
import { AdminViewAllProductsSeoComponent } from './admin/admin-view-all-products-seo/admin-view-all-products-seo.component';
import { AdminProductPageSeoComponent } from './admin/admin-product-page-seo/admin-product-page-seo.component';
import { AdminContentPageAddComponent } from './admin/admin-content-page-add/admin-content-page-add.component';
import { AdminViewAllContentPageComponent } from './admin/admin-view-all-content-page/admin-view-all-content-page.component';
import { AdminContentPageWithOptionComponent } from './admin/admin-content-page-with-option/admin-content-page-with-option.component';
import { AdminContentPageWithSeoComponent } from './admin/admin-content-page-with-seo/admin-content-page-with-seo.component';
import { AdminContentWithSeoPageOptionAndMoreComponent } from './admin/admin-content-with-seo-page-option-and-more/admin-content-with-seo-page-option-and-more.component';
import { ContentSpecificViewSeoComponent } from './admin/content-specific-view-seo/content-specific-view-seo.component';
import { AdminviewcustomerpageComponent } from './admin/adminviewcustomerpage/adminviewcustomerpage.component';
import { AdmincontentspecificviewdetailsComponent } from './admin/admincontentspecificviewdetails/admincontentspecificviewdetails.component';
import { AdmincontentpageupdateComponent } from './admin/admincontentpageupdate/admincontentpageupdate.component';
import { DiscountcodecreateComponent } from './admin/discountcodecreate/discountcodecreate.component';
import { AdmindiscountcodeViewAllComponent } from './admin/admindiscountcode-view-all/admindiscountcode-view-all.component';
import { AdmindiscountcodeupdatedetailsComponent } from './admin/admindiscountcodeupdatedetails/admindiscountcodeupdatedetails.component';
import { AdmindiscountcodeviewdetailsComponent } from './admin/admindiscountcodeviewdetails/admindiscountcodeviewdetails.component';


const routes: Routes = [
  { path: '',redirectTo: '/admin/login',pathMatch: 'full'},
  { path: 'eFnUID81z2hGeDm0gkIED1zdSOEAoxXy', component: AdminregisterComponent, canActivate: [AdminlogoutauthService] },
  { path: 'admin/login', component: AdminloginComponent, canActivate: [AdminlogoutauthService] },
  { path: 'admin/category/add', component: AdmincreatecategoryComponent, canActivate: [AdminloginauthService] },
  { path: 'admin/category/view', component: AdminviewcategorydetailsComponent, canActivate: [AdminloginauthService] },
  { path: 'admin/category/active', component: AdmincategoryactiveComponent, canActivate: [AdminloginauthService] },
  { path: 'admin/view', component: AdmindeleteadminComponent, canActivate: [AdminloginauthService] },
  { path: 'admin/category/seo', component: AdmincategorychangeseoComponent, canActivate: [AdminloginauthService] },
  { path: 'admin/category/seo/:url', component: AdmincategorymetataginputComponent, canActivate: [AdminloginauthService] },
  { path: 'admin/product/add', component: AdminProductPageComponent, canActivate: [AdminloginauthService] },
  { path: 'admin/product/view', component: AdminViewAllProductsComponent, canActivate: [AdminloginauthService] },
  { path: 'admin/product/specific/:name',component:AdminViewProductDetailsComponent,canActivate:[AdminloginauthService]},
  { path: 'admin/product/active',component:AdminViewAllProductsActiveComponent,canActivate:[AdminloginauthService]},
  { path: 'admin/product/seo',component:AdminViewAllProductsSeoComponent,canActivate:[AdminloginauthService]},
  { path: 'admin/product/seo/:url',component:AdminProductPageSeoComponent,canActivate:[AdminloginauthService]},
  { path: 'admin/blog/add',component:AdmincreateblogComponent,canActivate:[AdminloginauthService]},
  { path: 'admin/blog/view',component:AdminBlogPageWithButtonsComponent,canActivate:[AdminloginauthService]},
  { path: 'admin/content/add',component:AdminContentPageAddComponent,canActivate:[AdminloginauthService]},
  { path: 'admin/content/view',component:AdminViewAllContentPageComponent,canActivate:[AdminloginauthService]},
  { path: 'admin/content/active',component:AdminContentPageWithOptionComponent,canActivate:[AdminloginauthService]},  
  { path: 'admin/content/seo',component:AdminContentPageWithSeoComponent,canActivate:[AdminloginauthService]},
  { path: 'admin/content/seo/:url',component:AdminContentWithSeoPageOptionAndMoreComponent,canActivate:[AdminloginauthService]},
  { path: 'admin/content/specific/:url',component:ContentSpecificViewSeoComponent,canActivate:[AdminloginauthService]},
  { path: 'admin/customer/view',component:AdminviewcustomerpageComponent,canActivate:[AdminloginauthService]},
  
  // { path: 'admin/content/specific/:url',component:ContentSpecificViewSeoComponent,canActivate:[AdminloginauthService]},
  { path: 'admin/content/specific/:url',component:AdmincontentspecificviewdetailsComponent,canActivate:[AdminloginauthService]},
  { path: 'admin/content/specific/update/:url',component:AdmincontentpageupdateComponent},
  { path: 'admin/discountcode/create',component:DiscountcodecreateComponent},
  { path: 'admin/discountcode/view',component:AdmindiscountcodeViewAllComponent},
  { path: 'admin/discountcode/update',component:AdmindiscountcodeupdatedetailsComponent},
  { path: 'admin/discountcode/viewdetails/:id',component:AdmindiscountcodeviewdetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
