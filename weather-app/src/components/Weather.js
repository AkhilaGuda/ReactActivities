import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import "../styles/weather.css";

const API_KEY = "20f87299df2cf2929a2d76cf2cb60c5d";
async function fetchWeather(url) {
    const res = await fetch(url);
    const json = await res.json();
    if (json.cod !== 200) {
        throw new Error(json.message || 'City not found');
    }
    if (!res.ok) {
        throw new Error('failed to fetch weather data');
    }

    return json;
}
export default function Weather() {
    const [city, setCity] = useState("");//the city user types
    const [selectedCity, setSelectedCity] = useState("London");//the city used to fetch by deafult its london
    //useQuery- manages to fetch, cache, error handling and loading states.
    const { data, isLoading, error } = useQuery(
        {
            //query key it is unique key for caching i.e, each city results cached seperately
            //queryFn calls fetch Weather function with selected city
            //enabled!!selectedcity only runs if selected city is not empty
            //returns data fetched weather information, isLoading true while fetching, error object if something fails
            queryKey: ["weather", selectedCity],
            queryFn: async () => fetchWeather(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${API_KEY}`)
            , enabled: !!selectedCity,
        }

    );
    const handleSearch = () => {
        if (city.trim() !== "") {
            setSelectedCity(city);

        }
    }

    return (
        <div className="weather-container">
            <input type="text" placeholder="Enter City" value={city} onChange={(e) => setCity(e.target.value)} />
            <button onClick={handleSearch}>Get weather</button>

            <h2>Current weather in {selectedCity}</h2>

            {isLoading && <p>Weather data is loading...</p>}
            {error && <p>{error.message}</p>}
            {data && data.main && (<div><p>Temperature : <strong>{(data.main.temp - 273.15).toFixed(2)}</strong> degree celcius</p> <p> Condition : <strong>{data.weather[0]?.description || "NA"}</strong></p></div>)}
            
            {data && data.weather && data.weather[0] && (
                <img
                    src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                    alt={data.weather[0]?.description || "Weather icon"}
                />
            )}

        </div>
    );
}