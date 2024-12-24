import { LitElement, html, css } from 'lit';
import { customElement, property} from 'lit/decorators.js'

@customElement('tag-label')
export default class TagLabel extends LitElement {
  @property({ type: String }) label = 'Default Tag'; // Tag text
  @property({ type: String }) color = '#007bff'; // Background color
  @property({ type: String }) textColor = '#fff'; // Text color

  static styles = css`
    .tag {
      display: inline-block;
      padding: 5px 10px;
      margin-right:5px;
      border-radius: 12px;
      font-size: 14px;
      font-weight: 500;
      color: var(--text-color, #fff);
      background-color: var(--color, #007bff);
    }
  `;

  render() {
    return html`
      <span
        class="tag"
        style="--color: ${this.color}; --text-color: ${this.textColor};"
      >
        ${this.label}
      </span>
    `;
  }
}
