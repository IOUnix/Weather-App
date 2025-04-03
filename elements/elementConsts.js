const emptyElementString = `<div class="error">
            <p>Invalid City Name</p>
        </div>`;

const errorElementString = `<div class="empty">
            <p>Sorry you need to enter a value before searching.</p>
        </div>`;

const defaultWeatherElementString = `<div class="weather" style="display:none;">
            <div class=" = details">
                <div class="col">
                    <img src="images/humidity.png" />
                    <div>
                        <p class="humidity">50%</p>
                        <p>Humidity</p>
                    </div>
                </div>
                <div class="col">
                    <img src="images/wind.png" class="wind-icon" />
                    <div>
                        <p class="wind">10 mph</p>
                        <p>Wind Speed</p>
                    </div>
                </div>
            </div>
            <img src="images/rain.png" class="weather-icon" />
            <h1 class="temp">60°</h1>
            <h2 class="city">New York</h2>
        </div>`;