import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product/product';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit { 
  @Input() CategoryId :number;  
  products : string;
  productId:number;
  constructor(  private router:ActivatedRoute ) {
    
    
  // cartDetails.push(result[0]);
  }

 

    //if(this.data!=null && this.data.length>0) 
  
  
  ngOnInit() {
    
    
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
 

  }

}
