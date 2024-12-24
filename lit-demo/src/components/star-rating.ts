import { LitElement, html, css } from 'lit';
import { customElement, property} from 'lit/decorators.js'

@customElement('star-rating')
export default class StarRating extends LitElement {
  @property({ type: Number }) rating = 0; // Current rating
  @property({ type: Number }) max = 5; // Total number of stars

  static styles = css`
    .star {
      font-size: 2rem;
      color: gray;
      cursor: pointer;
    }
    .star.filled {
      color: gold;
    }
  `;

  render() {
    return html`
      <div>
        ${Array.from({ length: this.max }, (_, i) =>
          html`
            <span
              class="star ${i < this.rating ? 'filled' : ''}"
              @click="${() => this.updateRating(i + 1)}"
            >
              ★
            </span>
          `
        )}
      </div>
    `;
  }

  updateRating(newRating: number) {
    this.rating = newRating;
    this.dispatchEvent(new CustomEvent('rating-changed', { detail: { rating: newRating } }));
  }
}
