

angular
.module('app')
.controller('AppController', AppController);

function AppController($scope,$http) {

  var pokemonid = 37; //goupix 37
  var pokemons = [];
  var listTime = [];
  var url = 'http://lillepokemap.ddns.net/raw_data?swLat=50.62664222259848&swLng=2.9821047761803356&neLat=50.65581756756594&neLng=3.1263003328209606&_=1470750837080';
  url = 'http://lillepokemap.ddns.net/raw_data?pokemon=false&pokestops=false&gyms=false&scanned=false&appearances=true&pokemonid='+pokemonid+'&last=0';

  $http.get(url, {})
  .then(function (response) {
    var json = JSON.parse(response);
    var pokemonList = json.appearances;
    for (var i = 0; i < pokemonList.length; i++) {
      var unix_timestamp = pokemonList[i].disappear_time;
      var date = new Date(unix_timestamp);
      var hours = date.getHours();
      var minutes = "0" + date.getMinutes();
      var seconds = "0" + date.getSeconds();
      var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

      var pokemon = {};
      pokemon.formattedTime = formattedTime;
      pokemon.lat = pokemonList[i].latitude;
      pokemon.lng = pokemonList[i].longitude;

      listTime.push(formattedTime);
      pokemons.push(pokemon);
    }

    listTime.sort(function (a, b) {
      return new Date('1970/01/01 ' + a) - new Date('1970/01/01 ' + b);
    });

    pokemons.sort(function (a, b) {
      return new Date('1970/01/01 ' + a.formattedTime) - new Date('1970/01/01 ' + b.formattedTime);
    });

    for (var i = 0; i < pokemons.length; i++) {
      console.log(pokemons[i].formattedTime, ' : ' , pokemons[i].lat, pokemons[i].lng);
    }

    var counter = {};
    var counterPos = {};
    var listTimeByPos = {};

    pokemons.forEach(function(obj) {
      var key = JSON.stringify(obj);
      counter[key] = (counter[key] || 0) + 1;
      var pos = obj.lat+" "+obj.lng;
      counterPos[pos] = (counterPos[pos] || 0) + 1;
      if(listTimeByPos[pos] == null) listTimeByPos[pos] = [];
      listTimeByPos[pos].push(obj.formattedTime);
    });

    console.log(' - - - - -');
    console.log(' - - - - -');

    console.log("counterPos =====>");
    console.log(" ");

    console.log(counterPos);

    console.log(' - - - - -');
    console.log(' - - - - -');

    console.log("listTimeByPos =====>");
    console.log(" ");
    console.log(listTimeByPos)

  })
  .catch(function (err) {
    // Crawling failed...
  });
}
