const apikey = `f020e2a9f51a3928c2a01885dfa37408`;

const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");


const getWeather = async (city) => {
    weather.innerHTML = `<h2> Loading... </h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=%7Blat%7D&lon=%7Blon%7D&appid=%7BAPI`;
    const response = await fetch(url);
    const data = await response.json()
    console.log(data);
    return showWeather(data);
}

const showWeather = () => {
    if (data.cod == "404") {
        weather.innerHTML = `<h2> City Not Found </h2>`
        return;
    }
    weather.innerHTML = `
    <div>
       <img src="" alt="no image">
  </div>
   <div>
    <h2>${data.main.temp}</h2>
    <h4>${data.weather[0].main}</h4>
  </div> 
`
}

form.addEventListener(
    "submit",
    function (event) {
        getWeather(search.value);
        event.preventDefault();
    }
)