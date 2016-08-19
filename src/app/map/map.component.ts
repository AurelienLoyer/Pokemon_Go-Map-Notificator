import {Component, OnInit,ElementRef} from "@angular/core";
import {ViewEncapsulation} from '@angular/core';
import {NgStyle} from '@angular/common';
import {PokemonService} from '../pokemon/pokemon.service';

@Component({
    selector: "[map]",
    encapsulation: ViewEncapsulation.None,
    templateUrl: "./app/map/map.html",
    styleUrls:["./app/map/map.css"],
    directives: [],
    providers: [PokemonService]
})

export class MapComponent implements OnInit{

  public latMe:number;
  public lngMe:number;
  public zoom:number;
  public map:any;
  public me:any = {};
  public styles:any;
  public meIcon:string;

  public pokemons : any = [];
  public listTime : any = [];
  public markers : any = [];

  constructor(public elementRef:ElementRef,private pokemonService: PokemonService) {
    this.latMe = 50.6272508;
    this.lngMe = 3.0356723;
    this.zoom = 12;
    this.map = elementRef.nativeElement.querySelector("#gmap");
    this.meIcon = "app/assets/img/red_final.png";
    this.styles = [{"featureType":"all","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#ed5929"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#c4c4c4"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#ed5929"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21},{"visibility":"on"}]},{"featureType":"poi.business","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ed5929"},{"lightness":"0"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"color":"#ed5929"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#575757"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.stroke","stylers":[{"color":"#2c2c2c"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#999999"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}];
  }

  ngOnInit(){

    this.me.lat = this.latMe;
    this.me.lng = this.lngMe;
    this.me.icon = this.meIcon;
    //this.markers.push(this.me);

    setInterval(function(){ this.locateMe(); }, 3000);

    this.pokemonService.getPokemonStat('36')
      .subscribe((response) => {
        console.log(response);
      }, (error) => {
        console.error(error);
      });
  }

  locateMe(){
    console.log('je te trouve !');
  }

  centerMap(){
    //map.getBounds().contains(marker.getPosition())
  }
}
