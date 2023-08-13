const APIKEY = `f020e2a9f51a3928c2a01885dfa37408`;

const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

const getWeather = async (city) => {
	weather.innerHTML = `<h2> Loading... </h2>`;
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`;

	try {
		const response = await fetch(url);
		if (response.status !== 200) {
			throw new Error("Request failed.");
		}
		const data = await response.json();
		const imgUrl =
			await `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
		// console.log(data);
		return showWeather(data, imgUrl);
	} catch (error) {
		weather.innerHTML = `<h2> City Not Found </h2>`;
		return;
	}
};

const showWeather = (data, imgUrl) => {
	weather.innerHTML = `
    <div>
        <img src=${imgUrl} alt=${data.weather[0].description}>
    </div>
    <div>
        <h2>${data.main.temp} °C</h2>
        <h4>${data.weather[0].main}</h4>
    </div> 
`;
};

form.addEventListener("submit", function (event) {
	getWeather(search.value);
	event.preventDefault();
});
