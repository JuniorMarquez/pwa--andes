import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ArchwizardModule } from 'angular-archwizard';
import { HttpClientModule } from '@angular/common/http';
import { Component, Inject} from '@angular/core';
import { XunkCalendarModule } from '../xunk-calendar/xunk-calendar.module';

//RUTAS
import { app_routing } from "./app.routes";       

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

//DIRECTIVAS
import { ConfirmEqualValidatorDirective } from './confirm-equal-validator.directive';
import { FilePickerModule } from  '../assets/file-picker/src/public_api';

//COMPONENTS

import { CatalogComponent,DialogOverviewExampleDialog } from './components/catalog/catalog.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopTixsComponent } from './components/top-tixs/top-tixs.component';
import { SliderHomeComponent } from './components/slider-home/slider-home.component';
import { PreFooterComponent } from './components/pre-footer/pre-footer.component';
import { MyTixsComponent } from './components/my-tixs/my-tixs.component';
import { LoginComponent } from './components/login/login.component';
import { PartnersComponent } from './components/partners/partners.component';
import { SideleftComponent } from './components/sideleft/sideleft.component';
import { AffiliatesComponent } from './components/affiliates/affiliates.component';
import { PartnerDetailComponent } from './components/partner-detail/partner-detail.component';
import { AffiliateDetailComponent } from './components/affiliate-detail/affiliate-detail.component';
import { TixDetailComponent } from './components/tix-detail/tix-detail.component';
import { SignupComponent } from './components/signup/signup.component';
import { AlltixsComponent } from './components/alltixs/alltixs.component';
import { NewMemberComponent } from './components/new-member/new-member.component';
import { ComingComponent } from './components/coming/coming.component';
import { AffiliateComponent } from './components/new-member/affiliate/affiliate.component';
import { PartnerComponent } from './components/new-member/partner/partner.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddtixsComponent } from './components/addtixs/addtixs.component';
import { BookingComponent } from './components/booking/booking.component';
import { AlltixslistComponent } from './components/alltixslist/alltixslist.component';
import { AlltixsleftComponent } from './components/alltixsleft/alltixsleft.component';
import { AboutComponent } from './components/about/about.component';


//SERVICES
import {TixsService} from './services/tixs.service';
import {ProductInfoService} from './services/product-info.service';
import {CarService} from './services/car.service';
import {DataApiService} from './services/data-api.service';
import {ScrollTopService} from './services/scroll-top.service';
import {UserWService} from './services/user-w.service';



//ANIMATIONS
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//MATERIAL
//import { MaterialModule } from './material';
import {MatButtonModule, MatCheckboxModule,MatTabsModule } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTableModule} from '@angular/material/table';
import { TreksComponent } from './components/treks/treks.component';
import { NavComponent } from './components/nav/nav.component';


// import { HttpClientModule } from '@angular/common/http';
// import { Component, Inject} from '@angular/core';





@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    HeaderComponent,
    FooterComponent,
    DialogOverviewExampleDialog,
    TopTixsComponent,
    SliderHomeComponent,
    PreFooterComponent,
    MyTixsComponent,
    LoginComponent,
    PartnersComponent,
    SideleftComponent,
    AffiliatesComponent,
    PartnerDetailComponent,
    AffiliateDetailComponent,
    TixDetailComponent,
    SignupComponent,
    AlltixsComponent,
    ConfirmEqualValidatorDirective,
    NewMemberComponent,
    ComingComponent,
    AffiliateComponent,
    PartnerComponent,
    ProfileComponent,
    AddtixsComponent,
    BookingComponent,
    AlltixslistComponent,
    AlltixsleftComponent,
    AboutComponent,
    TreksComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    app_routing,
    MatButtonModule, MatCheckboxModule, MatTabsModule,MatDialogModule,MatIconModule,MatInputModule,
    MatListModule,MatDatepickerModule,
    MatNativeDateModule,MatStepperModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatTableModule,
    ArchwizardModule,
    CarouselModule,
    XunkCalendarModule,
    FilePickerModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatTabsModule,MatDialogModule,MatIconModule,MatInputModule,
    MatListModule,MatDatepickerModule,
    MatNativeDateModule,MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatTableModule
  ],
 entryComponents:[ DialogOverviewExampleDialog ],
  providers: [
    TixsService,
    DataApiService,
    ScrollTopService,
    UserWService
      ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
