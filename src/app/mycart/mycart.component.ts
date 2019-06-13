import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {
  cartDetails: Array<Product>[] = [];
  totalSum: number;
  isShow: boolean = false;
  constructor(private productService :ProductService) { }



  ngOnInit() {


    this.cartDetails = JSON.parse(localStorage.getItem("MyCart"));
    this.totalSum = this.getTotal();
   this.ShowHide ();
    

  }

  ShowHide()
  {
    this.cartDetails = JSON.parse(localStorage.getItem("MyCart"));
    if (this.cartDetails.length > 0) {

      this.isShow = true;
    }
    else
    {
      this.isShow = false;
    }
  }

  getTotal() {
    var carts = JSON.parse(localStorage.getItem("MyCart"));

    let total = 0;
    for (var i = 0; i < carts.length; i++) {

      total += carts[i].productcost;
      this.totalSum = total;

    }
    return total;
  }

  deleteid(id: number) {


    var cartDetailsData = JSON.parse(localStorage.getItem("MyCart"));
    var res = cartDetailsData.findIndex(item => item.productid === id)[0];


    this.cartDetails.splice(res, 1);
    localStorage.setItem("MyCart", JSON.stringify(this.cartDetails));

    this.totalSum = this.getTotal();

    var MyCart =JSON.parse( localStorage.getItem("MyCart"));
    
    this.productService.changes( MyCart.length);


   this.ShowHide();
  }
}
