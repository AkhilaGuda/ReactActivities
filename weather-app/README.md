# weather-app
* created react app using create-react-app
* To use tanstack query installed package using command "npm install @tanstack/react-query" it contains modules like useQuery.
* Created user input element to take city name from user, a button to handle click event.
* in handle search function the input is checked whether its empty or not and using setSelectedCity function city is updated to fetch results
* using useQuery data is fetched, it takes 2 params query key and query function
* query key is unique identifier for query, it helps to know what data is being cached and whether to refetch or reuse cached data
* query function fetches data, it returns a promise.
* fetchWeather function makes http request using fetch
* converting into json data
* json.cod checks for weather api cod field for errors
* if city is not found it throws errors.
* if http request itself fails error is thrown
* checking wheather loading or not with isLoading and respective message is shown while loading
* checks wheather data and data.main is present and displaying the temperature of partiular city similarly icon is shown with the help of id.