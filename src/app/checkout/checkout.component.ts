import { Component, OnInit } from '@angular/core';
//import { disconnect } from 'cluster';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  tatalCount:number;
  toatalCost:number;
  discount:number=5;
  tatalcalCost:number;
  totaldiscount :number;
  constructor() { }

  ngOnInit() {
    var cartDetailsData = JSON.parse(localStorage.getItem("MyCart"));
    this.tatalCount=cartDetailsData.length;
    this.toatalCost=cartDetailsData.reduce((sum,item)=>sum+item.productcost,0); 
    this.totaldiscount =Math.round(this.toatalCost*this.discount/100)
    this.tatalcalCost= Math.round(this.toatalCost-this.totaldiscount);





 

    

  }

}
