import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('weather-component')
export default class WeatherComponent extends LitElement {
  static styles = css`
    .weather {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
      max-width: 300px;
      margin: auto;
    }
    .temperature {
      font-size: 2rem;
      font-weight: bold;
    }
    .condition {
      font-size: 1.2rem;
      color: #555;
    }
  `;

  @property({ type: String }) city: string = 'London';
  @state() temperature: string = '';
  @state() condition: string = '';
  @state() errorMessage: string = '';

  async connectedCallback() {
    super.connectedCallback();
    await this.fetchWeather();
  }

  async fetchWeather() {
    const apiKey = '65504602010cc57a5dbb0e72abc594c4';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error('City not found or API error.');
      const data = await response.json();
      this.temperature = `${data.main.temp}°C`;
      this.condition = data.weather[0].description;
    } catch (error) {
      this.errorMessage = 'Error fetching weather data. Please try again.';
      console.error(error);
    }
  }

  render() {
    return html`
      <div class="weather">
        <h2>Weather in ${this.city}</h2>
        ${this.errorMessage
          ? html`<p>${this.errorMessage}</p>`
          : html`
              <p class="temperature">${this.temperature}</p>
              <p class="condition">${this.condition}</p>
            `}
      </div>
    `;
  }
}
