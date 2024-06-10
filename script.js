let lon;
let lat;
let temperature = document.querySelector(".temp")
let summary = document.querySelector(".summary")
let loc = document.querySelector(".location")
let icon = document.querySelector(".icon img")
const kelvin = 273.15


window.addEventListener("load", () =>{

    if(navigator.geolocation ){

        navigator.geolocation.getCurrentPosition((position) =>{

            console.log(position);
            lon = position.coords.longitude;
            lat = position.coords.latitude;

            const api_id= "8b462ca1a7b6b0a025a968d23b38cd30";
            const url_base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&` + `lon=${lon}&appid=${api_id}`;

            fetch(url_base)
            .then((response) => {
            console.log("Respuesta json");
                return response.json();
            })
            .then((data) => {

                console.log("Esta es la data")
                console.log(data);
                temperature.textContent = Math.floor(data.main.temp - kelvin) + "°C";
                summary.textContent = data.weather[0].description;
                loc.textContent = data.name + "," + data.sys.country;
            });
        });

    }
});