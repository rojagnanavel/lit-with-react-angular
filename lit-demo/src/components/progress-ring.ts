import { LitElement, html, css } from 'lit';;
import { customElement, property} from 'lit/decorators.js'

@customElement('progress-ring')
export default class ProgressRing extends LitElement {
  @property({ type: Number }) progress = 0; // Progress percentage
  @property({ type: Number }) radius = 50; // Radius of the ring
  @property({ type: String }) color = 'blue'; // Progress bar color

  static styles = css`
    :host {
      display: inline-block;
    }
    svg {
      transform: rotate(-90deg);
    }
    circle {
      transition: stroke-dasharray 0.3s ease;
    }
  `;

  render() {
    const circumference = 2 * Math.PI * this.radius;
    const offset = circumference - (this.progress / 100) * circumference;

    return html`
      <svg width="${this.radius * 2}" height="${this.radius * 2}">
        <!-- Background Circle -->
        <circle
          cx="${this.radius}"
          cy="${this.radius}"
          r="${this.radius}"
          fill="none"
          stroke="#e6e6e6"
          stroke-width="10"
        ></circle>
        <!-- Progress Circle -->
        <circle
          cx="${this.radius}"
          cy="${this.radius}"
          r="${this.radius}"
          fill="none"
          stroke="${this.color}"
          stroke-width="10"
          stroke-dasharray="${circumference}"
          stroke-dashoffset="${offset}"
        ></circle>
      </svg>
    `;
  }
}
