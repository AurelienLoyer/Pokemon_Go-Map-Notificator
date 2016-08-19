import {Component, OnInit,ElementRef} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

import {MDL} from './MaterialDesignLite/MaterialDesignLite';

import {VlilleComponent} from './vlille/vlille.component';
import {MapComponent} from './map/map.component';
import {HeaderComponent} from './header/header.component';
import {MenuComponent} from './menu/menu.component';

@Component({
    selector: 'app',
    templateUrl: './app/app.html',
    styleUrls: ['./app/app.css'],
    encapsulation: ViewEncapsulation.None,
    directives : [
      MDL,
      VlilleComponent,
      MapComponent,
      HeaderComponent,
      MenuComponent
    ],
    providers: []
})

export class AppComponent implements OnInit {
    ngOnInit() {
        console.log('Application component initialized ...');
    }
}
