import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cell-component',
  templateUrl: './cell-component.component.html',
  styleUrls: ['./cell-component.component.css']
})
export class CellComponentComponent implements OnInit {
  data:any;
  constructor() { }

  ngOnInit() {


  }
  agInit(params) {
this.data=params.value;

  }

}
