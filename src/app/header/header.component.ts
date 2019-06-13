import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../product/product.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName: string;
  @Output() valueChange = new EventEmitter();
  totalCount: any = [];
  totalvalue: number;
  public show_dialog: boolean = false;
  constructor(private productService: ProductService) {

    this.userName = sessionStorage.getItem("Name");
  }

  product
  valueChanged() { // You can give any function name

    this.valueChange.emit();
  }

  ngOnInit() {
    
    this.productService.chartCount.subscribe(x=>this.totalCount=x);

    var MyCart =JSON.parse(localStorage.getItem("MyCart"));
    if(MyCart!= null && MyCart.length>0)
    {
      this.totalCount=MyCart.length;
    }
    else
    {
      this.totalCount=0;
    }
    // this.productService.myNumber$.subscribe(totalCount => this.totalCount.push(totalCount));
    // this.totalvalue= this.totalCount.length;
  }

  logout() {
    // localStorage.setItem("MyCart","");
    // localStorage.clear();
    // sessionStorage.clear();
  }

  toggle() {
    this.show_dialog = !this.show_dialog;
  }

}
