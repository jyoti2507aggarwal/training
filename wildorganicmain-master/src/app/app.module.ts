import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { OrderModule } from 'ngx-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminViewAllContentPageComponent } from './admin/admin-view-all-content-page/admin-view-all-content-page.component';
import { AdminAddImagePageComponent } from './admin/admin-add-image-page/admin-add-image-page.component';
import { AdminViewImagePageComponent } from './admin/admin-view-image-page/admin-view-image-page.component';
import { AdminContentPageWithOptionComponent } from './admin/admin-content-page-with-option/admin-content-page-with-option.component';
import { AdminContentPageWithSeoComponent } from './admin/admin-content-page-with-seo/admin-content-page-with-seo.component';
import { AdminContentWithSeoPageOptionAndMoreComponent } from './admin/admin-content-with-seo-page-option-and-more/admin-content-with-seo-page-option-and-more.component';
import { AdminBlogPageWithButtonsComponent } from './admin/admin-blog-page-with-buttons/admin-blog-page-with-buttons.component';
import { AdminBlogUpdatePageComponent } from './admin/admin-blog-update-page/admin-blog-update-page.component';
import { AdminBlogViewDetailToApproveOrNotComponent } from './admin/admin-blog-view-detail-to-approve-or-not/admin-blog-view-detail-to-approve-or-not.component';
import { AdminAddImagesPagesComponent } from './admin/admin-add-images-pages/admin-add-images-pages.component';
import { AdminBlogAddImagesPagesWithButtonToDelComponent } from './admin/admin-blog-add-images-pages-with-button-to-del/admin-blog-add-images-pages-with-button-to-del.component';
import { AdminViewAllBlogWithButtoonToattachProductComponent } from './admin/admin-view-all-blog-with-buttoon-toattach-product/admin-view-all-blog-with-buttoon-toattach-product.component';
import { AdminAttachBlogToTheProductPageComponent } from './admin/admin-attach-blog-to-the-product-page/admin-attach-blog-to-the-product-page.component';
import { AdminViewAllBlogWithSeoButtonComponent } from './admin/admin-view-all-blog-with-seo-button/admin-view-all-blog-with-seo-button.component';
import { AdminBlogSeoOptionWithUrlAndInputComponent } from './admin/admin-blog-seo-option-with-url-and-input/admin-blog-seo-option-with-url-and-input.component';
import { AdmincreatecategoryComponent } from './admin/admincreatecategory/admincreatecategory.component';
import { AdminregisterComponent } from './admin/adminregister/adminregister.component';
import { AdminmailtemplateComponent } from './admin/adminmailtemplate/adminmailtemplate.component';
import { AdminviewmailtemplateComponent } from './admin/adminviewmailtemplate/adminviewmailtemplate.component';
import { AdminsetmessageorderstatusComponent } from './admin/adminsetmessageorderstatus/adminsetmessageorderstatus.component';
import { AdminsetthankumessageComponent } from './admin/adminsetthankumessage/adminsetthankumessage.component';
import { AdmincreatediscountComponent } from './admin/admincreatediscount/admincreatediscount.component';
import { AdminviewdiscountComponent } from './admin/adminviewdiscount/adminviewdiscount.component';
import { AdminupdatediscountComponent } from './admin/adminupdatediscount/adminupdatediscount.component';
import { AdminviewcustomerpageComponent } from './admin/adminviewcustomerpage/adminviewcustomerpage.component';
import { AdminupdatecustomeraccountComponent } from './admin/adminupdatecustomeraccount/adminupdatecustomeraccount.component';
import { AdminviewdetailscustomerComponent } from './admin/adminviewdetailscustomer/adminviewdetailscustomer.component';
import { AdminexportcustomerpageComponent } from './admin/adminexportcustomerpage/adminexportcustomerpage.component';
import { AdminaddorderstatusComponent } from './admin/adminaddorderstatus/adminaddorderstatus.component';
import { AdminviewallordersComponent } from './admin/adminviewallorders/adminviewallorders.component';
import { AdminupdateordersComponent } from './admin/adminupdateorders/adminupdateorders.component';
import { AdminviewdetailallordersComponent } from './admin/adminviewdetailallorders/adminviewdetailallorders.component';
import { HomepageComponent } from './admin/homepage/homepage.component';
import { AdminhomepageComponent } from './admin/adminhomepage/adminhomepage.component';
import { AdminviewpageComponent } from './admin/adminviewpage/adminviewpage.component';
import { AdmineditpageComponent } from './admin/admineditpage/admineditpage.component';
import { AdminactivepageComponent } from './admin/adminactivepage/adminactivepage.component';
import { AdminheaderpageComponent } from './admin/adminheaderpage/adminheaderpage.component';
import { AdminviewheaderComponent } from './admin/adminviewheader/adminviewheader.component';
import { AdmindropdownpageComponent } from './admin/admindropdownpage/admindropdownpage.component';
import { AdminviewdropdownComponent } from './admin/adminviewdropdown/adminviewdropdown.component';
import { AdminupdatedropdownComponent } from './admin/adminupdatedropdown/adminupdatedropdown.component';
import { AdminsidenavigationComponent } from './admin/adminsidenavigation/adminsidenavigation.component';
import { AdminsidenavigationheaderComponent } from './admin/adminsidenavigationheader/adminsidenavigationheader.component';
import { AdminfooternavigationComponent } from './admin/adminfooternavigation/adminfooternavigation.component';
import { AdminfooterheaderComponent } from './admin/adminfooterheader/adminfooterheader.component';
import { AdminorderpageComponent } from './admin/adminorderpage/adminorderpage.component';
import { AdminexportpageComponent } from './admin/adminexportpage/adminexportpage.component';
import { AdminAllCatetoryComponent } from './admin/admin-all-catetory/admin-all-catetory.component';
import { AdminProductPageComponent } from './admin/admin-product-page/admin-product-page.component';
import { AdminViewAllProductsComponent } from './admin/admin-view-all-products/admin-view-all-products.component';
import { AdminViewProductDetailsComponent } from './admin/admin-view-product-details/admin-view-product-details.component';
import { AdminUpdateProductPageComponent } from './admin/admin-update-product-page/admin-update-product-page.component';
import { AdminViewAllProductsActiveComponent } from './admin/admin-view-all-products-active/admin-view-all-products-active.component';
import { AdminViewAllProductsSeoComponent } from './admin/admin-view-all-products-seo/admin-view-all-products-seo.component';
import { AdminProductPageSeoComponent } from './admin/admin-product-page-seo/admin-product-page-seo.component';
import { AdminAdminDashboardComponent } from './admin/admin-admin-dashboard/admin-admin-dashboard.component';
import { AdminTypesReportPageComponent } from './admin/admin-types-report-page/admin-types-report-page.component';
import { AdminSalesDateRangeComponent } from './admin/admin-sales-date-range/admin-sales-date-range.component';
import { AdminTopSellingComponent } from './admin/admin-top-selling/admin-top-selling.component';
import { AdmincategorymetataginputComponent } from './admin/admincategorymetataginput/admincategorymetataginput.component';
import { AdminviewallcategoryComponent } from './admin/adminviewallcategory/adminviewallcategory.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminemailconfigComponent } from './admin/adminemailconfig/adminemailconfig.component';
import { AdminselectthumbnailComponent } from './admin/adminselectthumbnail/adminselectthumbnail.component';
import { AdminviewcategorydetailsComponent } from './admin/adminviewcategorydetails/adminviewcategorydetails.component';
import { AdminupdatecategoryComponent } from './admin/adminupdatecategory/adminupdatecategory.component';
import { AdmininventoryComponent } from './admin/admininventory/admininventory.component';
import { AdmincategoryactiveComponent } from './admin/admincategoryactive/admincategoryactive.component';
import { AdminaddimageComponent } from './admin/adminaddimage/adminaddimage.component';
import { AdminchangeseoComponent } from './admin/adminchangeseo/adminchangeseo.component';
import { AdmindeleteadminComponent } from './admin/admindeleteadmin/admindeleteadmin.component';
import { AdmincustomerdateComponent } from './admin/admincustomerdate/admincustomerdate.component';
import { AdminsidebarComponent } from './admin/adminsidebar/adminsidebar.component';
import { AdminviewcategorysubcategoryComponent } from './admin/adminviewcategorysubcategory/adminviewcategorysubcategory.component';
import { AdmincategorychangeseoComponent } from './admin/admincategorychangeseo/admincategorychangeseo.component';
import { AdmincreateblogComponent } from './admin/admincreateblog/admincreateblog.component';
import { AdminContentPageAddComponent } from './admin/admin-content-page-add/admin-content-page-add.component';
import { ContentSpecificViewSeoComponent } from './admin/content-specific-view-seo/content-specific-view-seo.component';
import { AdmincontentspecificviewdetailsComponent } from './admin/admincontentspecificviewdetails/admincontentspecificviewdetails.component';
import { AdmincontentpageupdateComponent } from './admin/admincontentpageupdate/admincontentpageupdate.component';
import { DiscountcodecreateComponent } from './admin/discountcodecreate/discountcodecreate.component';
import { AdmindiscountcodeViewAllComponent } from './admin/admindiscountcode-view-all/admindiscountcode-view-all.component';
import { AdmindiscountcodeviewdetailsComponent } from './admin/admindiscountcodeviewdetails/admindiscountcodeviewdetails.component';
import { AdmindiscountcodeupdatedetailsComponent } from './admin/admindiscountcodeupdatedetails/admindiscountcodeupdatedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminViewAllContentPageComponent,
    AdminAddImagePageComponent,
    AdminViewImagePageComponent,
    AdminContentPageWithOptionComponent,
    AdminContentPageWithSeoComponent,
    AdminContentWithSeoPageOptionAndMoreComponent,
    AdminBlogPageWithButtonsComponent,
    AdminBlogUpdatePageComponent,
    AdminBlogViewDetailToApproveOrNotComponent,
    AdminAddImagesPagesComponent,
    AdminBlogAddImagesPagesWithButtonToDelComponent,
    AdminViewAllBlogWithButtoonToattachProductComponent,
    AdminAttachBlogToTheProductPageComponent,
    AdminViewAllBlogWithSeoButtonComponent,
    AdminBlogSeoOptionWithUrlAndInputComponent,
    AdmincreatecategoryComponent,
    AdminregisterComponent,
    AdminmailtemplateComponent,
    AdminviewmailtemplateComponent,
    AdminsetmessageorderstatusComponent,
    AdminsetthankumessageComponent,
    AdmincreatediscountComponent,
    AdminviewdiscountComponent,
    AdminupdatediscountComponent,
    AdminviewcustomerpageComponent,
    AdminupdatecustomeraccountComponent,
    AdminviewdetailscustomerComponent,
    AdminexportcustomerpageComponent,
    AdminaddorderstatusComponent,
    AdminviewallordersComponent,
    AdminupdateordersComponent,
    AdminviewdetailallordersComponent,
    HomepageComponent,
    AdminhomepageComponent,
    AdminviewpageComponent,
    AdmineditpageComponent,
    AdminactivepageComponent,
    AdminheaderpageComponent,
    AdminviewheaderComponent,
    AdmindropdownpageComponent,
    AdminviewdropdownComponent,
    AdminupdatedropdownComponent,
    AdminsidenavigationComponent,
    AdminsidenavigationheaderComponent,
    AdminfooternavigationComponent,
    AdminfooterheaderComponent,
    AdminorderpageComponent,
    AdminexportpageComponent,
    AdminAllCatetoryComponent,
    AdminProductPageComponent,
    AdminViewAllProductsComponent,
    AdminViewProductDetailsComponent,
    AdminUpdateProductPageComponent,
    AdminViewAllProductsActiveComponent,
    AdminViewAllProductsSeoComponent,
    AdminProductPageSeoComponent,
    AdminAdminDashboardComponent,
    AdminTypesReportPageComponent,
    AdminSalesDateRangeComponent,
    AdminTopSellingComponent,
    AdmincategorymetataginputComponent,
    AdminviewallcategoryComponent,
    AdminloginComponent,
    AdminemailconfigComponent,
    AdminselectthumbnailComponent,
    AdminviewcategorydetailsComponent,
    AdminupdatecategoryComponent,
    AdmininventoryComponent,
    AdmincategoryactiveComponent,
    AdminaddimageComponent,
    AdminchangeseoComponent,
    AdmindeleteadminComponent,
    AdmincustomerdateComponent,
    AdminsidebarComponent,
    AdminviewcategorysubcategoryComponent,
    AdmincategorychangeseoComponent,
    AdmincreateblogComponent,
    AdminContentPageAddComponent,
    ContentSpecificViewSeoComponent,
    AdmincontentspecificviewdetailsComponent,
    AdmincontentpageupdateComponent,
    DiscountcodecreateComponent,
    AdmindiscountcodeViewAllComponent,
    AdmindiscountcodeviewdetailsComponent,
    AdmindiscountcodeupdatedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularEditorModule,
    OrderModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
