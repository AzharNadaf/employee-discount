import { Component, OnInit } from '@angular/core';
import * as jquery from 'jquery';




@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  constructor() {

  }

  ngOnInit() {
    $(document).ready(function () {
      (<any>$('[data-toggle="popover"]')).popover({
        placement: 'auto',
        container: 'body',
        trigger: 'hover'
      })


    })
  }


}
