import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  myFontSize = "15px";
  myColor = "blue";

  constructor() { }

  ngOnInit() {
    //debugger;
    console.log("teste");
  }

}