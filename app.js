
// 5244236ff048ff9363fe20982e307e0d

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


console.log('welcome')
const weatherapi ={
    key: '5244236ff048ff9363fe20982e307e0d',
    baseurl: "https://api.openweathermap.org/data/2.5/weather"
}

const searchinput = document.getElementById('input-box');

searchinput.addEventListener('keypress', (event)=>{
   
    if(event.keyCode==13){
    console.log(searchinput.value)
    weatherreport(searchinput.value);
    }
});

function weatherreport(city) {
    
    fetch(`${weatherapi.baseurl}?q=${city}&appid=${weatherapi.key}&units=metric`)
    .then(res=>res.json())
    .then(showweatherreport);
}
function showweatherreport(res) {
    
    console.log(res);

    let city = document.getElementById('city');
    city.innerText= `${res.name}, ${res.sys.country}`;

    let temp = document.getElementById('temp');
    temp.innerHTML = `${Math.round(res.main.temp)}&deg;C`;

    let minmax = document.getElementById('min-max');
    minmax.innerHTML=`${Math.floor(res.main.temp_min)}&deg;C (min) / ${Math.ceil(res.main.temp_max)}&deg;C (max)`;

    let weather = document.getElementById('weather');
    weather.innerHTML= `${res.weather[0].main}`;

    let date = document.getElementById('date');
    let todate = new Date();
    date.innerText= datemanage(todate);

    if (weather.textContent =='Mist'){
        document.body.style.backgroundImage="url('images/clear.jpg')";
    } else if (weather.textContent =='Clouds'){
        document.body.style.backgroundImage="url('images/cloud.jpg')";
    } else if (weather.textContent =='Rain'){
        document.body.style.backgroundImage="url('images/rain.jpg')";
    } else if (weather.textContent =='Snow'){
        document.body.style.backgroundImage="url('images/snow.jpg')";
    }
     else if (weather.textContent =='Thunderstorm'){
        document.body.style.backgroundImage="url('images/thunderstom.jpg')";
    }
}



function datemanage(datearg) {
    let days = ["sunday", "monday", "tuesday", "wednesday", "thursday","friday","saturday"];
    let months =["january","february","march","april","may","june","july","august","september","october","november","december"];

    let year = datearg.getFullYear();
    let month = months[datearg.getMonth()];
    let date = datearg.getDate();
    let day = days[datearg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}

