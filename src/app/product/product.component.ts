import { Component, OnInit } from '@angular/core';
import { Product } from './product';
//import { stringify } from '@angular/core/src/util';
import { ProductService } from './product.service';
import { Router } from '@angular/router';
import * as jquery from 'jquery';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],


})
export class ProductComponent implements OnInit {

  public categoryid: number = 0;
  public isloadCategory: boolean = true;
  public isloadProduct: boolean = false;
  public isloadProductSelected: boolean = false;

  constructor(private productService: ProductService, private router: Router) { 
  
  }
  listProduct: Array<Product> = [];
  listProductSelect: Array<Product> = [];
  listProductDisplay: Array<Product> = [];

  listCategoryDisplay: Array<Product> = [];
  product: number[] = [];
  isProductadded: boolean = false;


  onPaginationClick(id: number) {
    this.isProductadded = false;
    if (id != 0) {
      this.listProductDisplay = this.listProduct.filter(s => s.categoryid == (id));



      this.isloadCategory = !this.isloadCategory;
      this.isloadProduct = !this.isloadCategory;
    }

    $(document).ready(function () {
      (<any>$('a[data-toggle="popover"]')).popover({
        placement: 'auto',
        container: '#popWrapp',
        trigger: 'hover'
      })


    })
  }
  onProductClick(id: number) {
    var result = this.listProduct.filter(s => s.productid == (id));
    if (localStorage.getItem("MyCart") != null) {
      this.listProductSelect = JSON.parse(localStorage.getItem("MyCart"));
      this.listProductSelect.push(result[0]);
      this.productService.changes( this.listProductSelect.length)
    }
    else {
      this.listProductSelect = this.listProduct.filter(s => s.categoryid == (id));
      this.productService.changes( this.listProductSelect.length)
    }
    

    //this.listProductSelect[0]


    this.isloadProductSelected = true;
    //   this.product.push(id)
    //  // this.productService.increaseNumber(this.listProductSelect)
    //  // this.listProductSelect.push(this.product)
    //  // this.router.navigate(['/product/']);

    localStorage.setItem("MyCart", JSON.stringify(this.listProductSelect));
    console.log(this.listProductSelect);
    this.isProductadded = true;


  }

  ngAfterViewInit() {
    $(document).ready(function () {
      (<any>$('a[data-toggle="popover"]')).popover({
        placement: 'auto',
        container: '#popWrapp',
        trigger: 'hover'
      })


    })
  }
  ngOnInit() {


    this.isProductadded = false;
    if (this.listProduct.length == 0) {
      let basePath = "assets";
      this.listProduct.push(
        new Product("Knives & Blades", 100, "DOUBLE-SIDED BI-MATERIAL PULL CUTTER", 20, '/assets/link4.png', 1),
        new Product("Knives & Blades", 101, "DOUBLE-SIDED BI-MATERIAL PULL CUTTER", 10, basePath + '/link10.jpg', 1),
        new Product("Knives & Blades", 102, "DOUBLE-SIDED BI-MATERIAL PULL CUTTER", 12, basePath + '/link11.jpg', 1),
        new Product("Knives & Blades", 103, "DOUBLE-SIDED BI-MATERIAL PULL CUTTER", 30, basePath + '/link12.jpg', 1),


        new Product("Levels", 2, "DOUBLE-SIDED BI-MATERIAL PULL CUTTER - 10 PK", 10, basePath + '/link3.png', 2),
        new Product("Hammers", 3, "14 OZ FATMAX® HIGH VELOCITY HAMMER", 35, basePath + '/link2.png', 3),
        new Product("Automotive Tools", 4, "60 PC. MECHANICS TOOL SET", 40, basePath + '/link1.png', 4),
        new Product("Battery Chargers", 5, "60 PC. MECHANICS TOOL SET", 40, basePath + '/link7.png', 5),
        new Product("Clamps & Vises", 6, "60 PC. MECHANICS TOOL SET", 40, basePath + '/link8.jpg', 6),
        new Product("Demolition Tools", 7, "DOUBLE-SIDED BI-MATERIAL PULL CUTTER", 20, basePath + '/link9.jpg', 7),
        new Product("Flashlights & Lighting", 8, "DOUBLE-SIDED BI-MATERIAL PULL CUTTER - 10 PK", 10, basePath + '/link13.jpg', 8),
        new Product("Garden Tools", 9, "14 OZ FATMAX® HIGH VELOCITY HAMMER", 35, basePath + '/link14.jpg', 9),
        new Product("Homeowner Guides", 10, "60 PC. MECHANICS TOOL SET", 40, basePath + '/link4.png', 10),
        new Product("Manual Fastening Tools", 11, "60 PC. MECHANICS TOOL SET", 40, basePath + '/link15.jpg', 11),
        new Product("Mobile & Electrical Accessories", 12, "60 PC. MECHANICS TOOL SET", 40, basePath + '/link4.png', 12),
        new Product("Pliers", 13, "DOUBLE-SIDED BI-MATERIAL PULL CUTTER", 20, basePath + '/link16.jpg', 13),
        new Product("Jump Starters & Power Stations", 14, "DOUBLE-SIDED BI-MATERIAL PULL CUTTER - 10 PK", 10, basePath + '/link2.png', 14),
        new Product("Paint Brushes & Kits", 15, "14 OZ FATMAX® HIGH VELOCITY HAMMER", 35, basePath + '/link3.png', 15),
        new Product("wer Inverters", 16, "60 PC. MECHANICS TOOL SET", 40, basePath + '/link4.png', 16),
        new Product("Pressure Washers", 17, "60 PC. MECHANICS TOOL SET", 40, basePath + '/link4.png', 17),
        new Product("Protective Workwear", 18, "60 PC. MECHANICS TOOL SET", 40, basePath + '/link18.jpg', 18),
        new Product("Sawhorse & Workbench", 19, "DOUBLE-SIDED BI-MATERIAL PULL CUTTER", 20, basePath + '/link17.jpg', 19),
        new Product("Saws & Cutting Tools", 20, "DOUBLE-SIDED BI-MATERIAL PULL CUTTER - 10 PK", 10, basePath + '/link2.png', 20),
        new Product("Screwdrivers", 21, "14 OZ FATMAX® HIGH VELOCITY HAMMER", 35, basePath + '/link3.png', 21),
        new Product("Toolboxes & Organizers", 22, "60 PC. MECHANICS TOOL SET", 40, basePath + '/link4.png', 22),
        new Product("Wet/Dry Vacuums", 23, "60 PC. MECHANICS TOOL SET", 40, basePath + '/link6.png', 23),
        new Product("Woodworking Tools", 12, "60 PC. MECHANICS TOOL SET", 40, basePath + '/link4.png', 24),
      );

      this.listCategoryDisplay = this.listProduct.filter((thing, i, arr) => {
        return arr.indexOf(arr.find(t => t.categoryid === thing.categoryid)) === i;
      });

      console.log(this.listCategoryDisplay.length);


      // this.listProductSelect = this.listProduct.filter(s => s.categoryid==(1));
      // localStorage.setItem("ProductData", JSON.stringify( this.listProduct));
      localStorage.setItem("ProductData", JSON.stringify(this.listProduct));
    }

  }

}