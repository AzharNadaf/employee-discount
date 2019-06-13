import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component';

import { HomepageComponent } from './homepage/homepage.component';
import { SupportComponent } from './support/support.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { MycartComponent } from './mycart/mycart.component';
import { ProductComponent } from './product/product.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderplacedComponent } from './orderplaced/orderplaced.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'homepage', component: HomepageComponent },
    { path: 'support', component: SupportComponent },
    { path: 'newsletter', component: NewsletterComponent },
    { path: 'mycart', component: MycartComponent },
    { path: 'product', component: ProductComponent },
     { path: 'productlist/:categoryid', component: ProductlistComponent },
    { path: 'productdetail/:productid', component: ProductdetailComponent },
    
    { path: 'checkout', component: CheckoutComponent },
    { path: 'orderplaced', component: OrderplacedComponent },
    { path: 'productdetail', component: ProductdetailComponent },
    { path: '**', redirectTo: '' },
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);