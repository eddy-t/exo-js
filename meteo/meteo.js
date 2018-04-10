// API KEY 941177b9e0b412e5ae14b58df4e8e909

var url = 'http://api.openweathermap.org/data/2.5/weather?units=metric&id=6456577&appid=941177b9e0b412e5ae14b58df4e8e909'

$.ajax ({
    url: url,
    dataType: 'json',

    success: function(res,status,req) {

      var pays = res.sys.country,
          ville = res.name,
          meteo = res.weather[0].main,
          meteoDesc = res.weather[0].description,
          temp = res.main.temp,
          humidite = res.main.humidity,
          pression = res.main.pressure,
          tempMax = res.main.temp_max,
          tempMin = res.main.temp_min,
          clouds = res.clouds.all,
          heureCoucher = res.sys.sunset,
          heureLever = res.sys.sunrise;

      function timeConverter(timestamp){
          var a = new Date(timestamp * 1000),
              months = ['Jan','Fev','Mar','Avr','Mai','Juin','Juil','Aout','Sep','Oct','Nov','Dec'],
              year = a.getFullYear(),
              month = months[a.getMonth()],
              date = a.getDate(),
              hour = a.getHours(),
              min = a.getMinutes(),
              sec = a.getSeconds(),
              time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
          return time;
      }


      document.getElementById('country').innerHTML = 'Pays: ' + pays;
      document.getElementById('town').innerHTML = 'Ville: ' + ville;
      document.getElementById('meteo').innerHTML = 'Météo actuelle: ' + meteo;
      document.getElementById('meteoDesc').innerHTML = 'Description: ' + meteoDesc;
      document.getElementById('temp').innerHTML = 'Température: ' + temp + '°C';
      document.getElementById('humidity').innerHTML = "Taux d'humidité: " + humidite + '%';
      document.getElementById('pression').innerHTML = 'Préssion Atmosphérique: ' + pression + ' hPa';
      document.getElementById('tempMax').innerHTML = 'Température maximal: ' + tempMax + '°C';
      document.getElementById('tempMin').innerHTML = 'Température minimal: ' + tempMin + '°C';
      document.getElementById('clouds').innerHTML = 'Pourcentage de nuages: ' + clouds + '%';
      document.getElementById('heureLever').innerHTML = 'Sunset hour ' + timeConverter(heureLever);
      document.getElementById('heureCoucher').innerHTML = 'Sunrise hour ' + timeConverter(heureCoucher);



    }
});

/////////////// ONLY FOR DEBUG ////////////
//////////////////////////////////////////
//      console.log(meteo);
//      console.log(meteoDesc);
//      console.log(pays);
//      console.log(ville);
//      console.log(temp + '°C');
//      console.log(humidite + '%');
//      console.log(pression + ' hPa');
//      console.log(tempMin + '°C');
//      console.log(tempMax + '°C');
//      console.log(clouds + '%');
//      console.log(timeConverter(heureLever));
//      console.log(timeConverter(heureCoucher));
