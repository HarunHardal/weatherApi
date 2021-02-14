var city = document.querySelector('.city span');
var weatherIcon = document.querySelector('.weatherIcon span');
var weatherIcon1 = document.querySelector('.weatherIcon');
var input = document.querySelector('#input');
var button = document.querySelector('#button').addEventListener('click', tempFunction);
var tempResult = document.querySelector('#tempResult');
var weatherTextId = document.querySelector('#weatherTextId');
var humidity = document.querySelector('.bar2 #humidity');
var wind = document.querySelector('.bar1 #wind');
var country = document.querySelector('.country');
function tempFunction(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=YOUR_KEY') // ENTER YOUR OPENWEATHER API KEY
    .then(resolve => resolve.json())
    .then(data=>{
        var temp = data['main']['temp'];
        var tempfloor = Math.round(temp-273.15);
        tempResult.innerHTML = tempfloor + "℃";
        city.innerHTML  = input.value;
        weatherTextId.innerHTML = data['weather'][0]['description'];
        humidity.innerHTML = data['main']['humidity'] +'%';
        wind.innerHTML = data['wind']['speed'];
        weatherIcon1.style.display = "block";
        country.innerHTML = data['sys']['country']
        weatherIcon="";
if(data['weather'][0]['main'] == 'Thunderstorm'){
    
    weatherIcon = `
    <div class="icon thunder-storm">
    <div class="cloud"></div>
    <div class="lightning">
      <div class="bolt"></div>
      <div class="bolt"></div>
    </div>
  </div>
    `
    weatherIcon1.innerHTML = weatherIcon
}
else if(data['weather'][0]['main'] == 'Drizzle'){

    weatherIcon = `
    <div class="icon sun-shower">
    <div class="cloud"></div>
    <div class="sun">
      <div class="rays"></div>
    </div>
    <div class="rain"></div>
  </div>
    `
    weatherIcon1.innerHTML = weatherIcon
}
else if(data['weather'][0]['main'] == 'Rain'){

    weatherIcon = `
    <div class="icon rainy">
    <div class="cloud"></div>
    <div class="rain"></div>
  </div>
    `
    weatherIcon1.innerHTML = weatherIcon
}
else if(data['weather'][0]['main'] == 'Snow'){

    weatherIcon = `
    <div class="icon flurries">
    <div class="cloud"></div>
    <div class="snow">
      <div class="flake"></div>
      <div class="flake"></div>
    </div>
  </div>
    `
    weatherIcon1.innerHTML = weatherIcon
}
else if(data['weather'][0]['main'] == 'Clear'){

    weatherIcon = `
<div class="icon sunny">
<div class="sun">
<div class="rays"></div>
</div>
</div>
    `
    weatherIcon1.innerHTML = weatherIcon
}
else if(data['weather'][0]['main'] == 'Clouds'){

    weatherIcon = `
<div class="icon cloudy">
  <div class="cloud"></div>
  <div class="cloud"></div>
</div>
    `
    weatherIcon1.innerHTML = weatherIcon
}
else if(data['weather'][0]['main'] == 'Atmosphere'){

    weatherIcon = `
<div class="icon cloudy">
  <div class="cloud"></div>
  <div class="cloud"></div>
</div>
    `
    weatherIcon1.innerHTML = weatherIcon
}
else{alert('someting went wrong')}
        //data['weather'][0]['main'] == brokenClouds
       console.log(data)
    }).catch(err=>console.log(err))
}