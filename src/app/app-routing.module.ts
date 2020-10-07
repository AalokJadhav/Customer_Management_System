import { TotalcustomerComponent } from './totalcustomer/totalcustomer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';


import { SideComponent } from './side/side.component';
import { LeadListComponent } from './lead-list/lead-list.component';
import { AddLeadComponent } from './add-lead/add-lead.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TotalLeadComponent } from './total-lead/total-lead.component';
import { UpdateLeadComponent } from './update-lead/update-lead.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { ImageListComponent } from './image-list/image-list.component';
import { GalleryComponent} from './gallery/gallery.component';
import { RecaptchaComponent } from 'ng-recaptcha';
import { UploadmapComponent } from './uploadmap/uploadmap.component';


const routes: Routes = [

  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  { path: 'signup', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  {path : 'addcustomer', component : AddCustomerComponent, canActivate: [AuthGuard]},
  {path : 'navbar', component : NavbarComponent, canActivate: [AuthGuard]},
  {path : 'dashboard', component : DashboardComponent, canActivate: [AuthGuard]},
  { path: 'sidebar', component: SideComponent, canActivate: [AuthGuard]},
  { path: 'customerlist', component: CustomerListComponent, canActivate: [AuthGuard]},
  { path: 'addlead', component: AddLeadComponent, canActivate: [AuthGuard]},
  { path: 'leadlist', component: LeadListComponent, canActivate: [AuthGuard]},
  { path: 'updatelead/:id', component: UpdateLeadComponent, canActivate: [AuthGuard]},
  { path: 'totalcustomer', component: TotalcustomerComponent, canActivate: [AuthGuard]},
  { path: 'totallead', component: TotalLeadComponent, canActivate: [AuthGuard]},
  { path: 'uploadimage', component: UploadImageComponent},
  { path: 'imagelist', component: ImageListComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'recaptcha', component: RecaptchaComponent},
  { path: 'uploadmap', component: UploadmapComponent},

  { path: '404', component: NotfoundComponent},
  { path: '**', redirectTo: '/404'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
