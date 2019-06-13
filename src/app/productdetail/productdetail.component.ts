import { Component, OnInit } from '@angular/core';
import * as jquery from 'jquery';
import { ActivatedRoute, RouterOutlet, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

   productId:number; 
   Itemprice : number;
   Productimage: string;
   constructor(  private router:ActivatedRoute, private route:Router ,private productService :ProductService)
   {
     
   }

  ADDProduct():void
  {
 
    this.productId = parseInt( this.router.snapshot.paramMap.get("productid"))
    var ProductData =JSON.parse( localStorage.getItem("ProductData"));
    var result = ProductData.filter(s => s.productid == (this.productId ));  
   
    if (localStorage.getItem("MyCart") != null) {
     var  cartDetails = JSON.parse(localStorage.getItem("MyCart"));    
      cartDetails.push(result[0]);
      localStorage.setItem("MyCart", JSON.stringify(cartDetails));
      
    }
    else
    { 
      localStorage.setItem("MyCart", JSON.stringify(result));  
    }

    var MyCart =JSON.parse( localStorage.getItem("MyCart"));
    
    this.productService.changes( MyCart.length)
   this.route.navigate(["mycart"]);
   
  }
  ngOnInit() {
    $(document).ready(function () {
      (<any>$('[data-toggle="popover"]')).popover({
        placement: 'auto',
        container: 'body',
        trigger: 'hover'
      })

      


    
    })
    this.productId = parseInt( this.router.snapshot.paramMap.get("productid"))
      var ProductData =JSON.parse( localStorage.getItem("ProductData"));
      var result = ProductData.filter(s => s.productid == (this.productId ));  
      this.Itemprice =result[0].productcost;
      this.Productimage= result[0].imagepath;
  }

}
