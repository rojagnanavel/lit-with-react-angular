import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('lit-button')
export default class LitButton extends LitElement {
  @property({ type: String }) label: string = 'Click Me';
  @property({ type: Boolean }) disabled: boolean = false;

  static styles = css`
    :host {
      display: inline-block;
    }
    button {
      padding: 10px 20px;
      font-size: 16px;
      border: none;
      border-radius: 4px;
      background: var(--button-bg, #007bff);
      color: var(--button-color, #fff);
      cursor: pointer;
      transition: background 0.3s;
    }
    button:hover {
      background: var(--button-hover-bg, #0056b3);
    }
    button:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
  `;
  render() {
    return html`
      <button ?disabled=${this.disabled}>
        ${this.label}
      </button>
    `;
  }
}
