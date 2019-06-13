import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './core/material.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../app/login/login.service'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';


import { AgGridModule } from 'ag-grid-angular';
import { routing } from './routes'
import { CookieService } from 'ngx-cookie-service';
import { NgDatepickerModule } from 'ng2-datepicker';
import { from } from 'rxjs';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CellComponentComponent } from './cell-component/cell-component.component';
import { DatePipe } from '@angular/common';

import { HomepageComponent } from './homepage/homepage.component';
import { SupportComponent } from './support/support.component';
import { MycartComponent } from './mycart/mycart.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ProductComponent } from './product/product.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderplacedComponent } from './orderplaced/orderplaced.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductService } from './product/product.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    CellComponentComponent,
    HomepageComponent,
    FooterComponent,
    SupportComponent,
    MycartComponent,
    NewsletterComponent,
    ProductComponent,
    ProductlistComponent,
    CheckoutComponent,
    OrderplacedComponent,
    ProductdetailComponent

  ],
  imports: [
    BrowserModule, NgDatepickerModule, FormsModule, AgGridModule.withComponents([]),
    ReactiveFormsModule, HttpClientModule, RouterModule,
    routing, BrowserAnimationsModule, CustomMaterialModule, OwlDateTimeModule,
    OwlNativeDateTimeModule

  ],
  providers: [
    LoginService, CookieService, DatePipe,ProductService



  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



