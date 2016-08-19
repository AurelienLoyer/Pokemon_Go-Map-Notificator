import {Component, OnInit,ElementRef} from "@angular/core";
import {ViewEncapsulation} from '@angular/core';
import {NgStyle} from '@angular/common';
import {XmlParsePipe} from '../pipes/xmlparse.pipe';
import {VlilleService} from './vlille.service';
import {Observable} from 'rxjs/Observable';
import {Http,Headers,Jsonp} from '@angular/http';


@Component({
    selector: "vlille",
    encapsulation: ViewEncapsulation.None,
    templateUrl: "./app/vlille/vlille.html",
    styleUrls:["./app/vlille/vlille.css"],
    providers: [VlilleService],
    pipes : [XmlParsePipe]
})

export class VlilleComponent implements OnInit{

  public _sRotate: string = "1";
  public items;
  public logError;
  public http : Http;

  constructor(private vlilleservice: VlilleService) {

  }

  ngOnInit(){
    console.log('Init VLille');
    try {
    this.vlilleservice.getBorneData('36')
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );
    } catch (e){

    }
  }
}
