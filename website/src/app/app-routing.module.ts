import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { Home1Component } from './home1/home1.component';
import { MiddleComponent } from './middle/middle.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
{path:"home1",component:Home1Component},
{path:'',component:MiddleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
