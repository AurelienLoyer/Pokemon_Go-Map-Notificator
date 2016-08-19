import {Component, OnInit,ElementRef} from "@angular/core";
import {ViewEncapsulation} from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
    selector: "[header]",
    encapsulation: ViewEncapsulation.None,
    templateUrl: "./app/header/header.html",
    styleUrls:["./app/header/header.css"],
    directives: [],
    pipes:[]
})

export class HeaderComponent implements OnInit{

  public title: string;

  constructor() {
    this.title = "PokemonGo Map Notificator";
  }

  ngOnInit(){
    console.log('Init Header');
  }
}
