import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import {ReactiveFormsModule } from '@angular/forms';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService} from './auth.service';
import { NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';


import { ResizeDirective } from './resize.directive';
import { MultiplyPipe } from './multiply.pipe';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AddLeadComponent } from './add-lead/add-lead.component';
import { LeadListComponent } from './lead-list/lead-list.component';
import { SideComponent } from './side/side.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TotalcustomerComponent } from './totalcustomer/totalcustomer.component';
import { TotalLeadComponent } from './total-lead/total-lead.component';
import { TotalCustomerListComponent } from './total-customer-list/total-customer-list.component';
import { FooterComponent } from './footer/footer.component';
import { UpdateLeadComponent } from './update-lead/update-lead.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { ImageListComponent } from './image-list/image-list.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RecaptchaComponent } from './recaptcha/recaptcha.component';
import { UploadmapComponent } from './uploadmap/uploadmap.component';


@NgModule({
  declarations: [
    AppComponent,
    ResizeDirective,
    MultiplyPipe,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    NotfoundComponent,
    DashboardComponent,
    AddCustomerComponent,
    CustomerListComponent,
    AddLeadComponent,
    LeadListComponent,
    SideComponent,
    NavbarComponent,
    TotalcustomerComponent,
    TotalLeadComponent,
    TotalCustomerListComponent,
    FooterComponent,
    UpdateLeadComponent,
    UploadImageComponent,
    FileuploadComponent,
    ImageListComponent,
    GalleryComponent,
    RecaptchaComponent,
    UploadmapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    RecaptchaModule.forRoot(),
    AgmCoreModule.forRoot({
      // apiKey: "AIzaSyCaehg9NWOr3UFblPGz1E1uD66EomA1qFA",
      apiKey: "AIzaSyBdq0n9EhaBTpvRXY8vT9negMDOmcqWu_o",
      libraries: ["places"]
    }),
    ],
  providers: [AuthService,
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: { siteKey: '6Lc9vLEUAAAAAEcrSJMTuab8bj1MZwW_N4a5dCaQ' } as RecaptchaSettings,
    }],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
