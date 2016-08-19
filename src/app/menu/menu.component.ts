import {Component, OnInit,ElementRef} from "@angular/core";
import {ViewEncapsulation} from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
    selector: "[menu]",
    encapsulation: ViewEncapsulation.None,
    templateUrl: "./app/menu/menu.html",
    styleUrls:["./app/menu/menu.css"],
    directives: [],
    pipes:[]
})

export class MenuComponent implements OnInit{

  public showHeader: boolean;
  public texte_2: string;

  constructor() {
    this.showHeader = false;
    this.texte_2 = "Aurélien";
  }

  ngOnInit(){
    console.log('Init Message');
  }
}
