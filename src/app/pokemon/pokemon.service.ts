import {Injectable} from '@angular/core';
import {Http,Headers,Jsonp} from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class PokemonService {

  //public url = 'http://lillepokemap.ddns.net/raw_data?swLat=50.62664222259848&swLng=2.9821047761803356&neLat=50.65581756756594&neLng=3.1263003328209606&_=1470750837080';
  public urlStat : String = 'http://lillepokemap.ddns.net/raw_data?callback=JSONP_CALLBACK&pokemon=false&pokestops=false&gyms=false&scanned=false&appearances=true&last=0&pokemonid=';
  public http : any;
  public jsonp : any;

  constructor( jsonp : Jsonp, http : Http) {
    this.http = http;
    this.jsonp = jsonp;
  }

  getPokemonStat(pokemonid){
    return this.jsonp
      .get(this.urlStat+pokemonid)
  }

}
