import { LitElement, html, css } from 'lit';
import { customElement, property , state} from 'lit/decorators.js';

@customElement('multi-prop-component')
export class MultiPropComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      margin: 5px 0;
    }
    button {
      padding: 5px 10px;
      cursor: pointer;
    }
  `;

  // Define various property types
  @property({ type: String }) title: string = 'Default Title';
  @property({ type: Number }) count: number = 0;
  @property({ type: Boolean }) isEnabled: boolean = false;
  @property({ type: Function }) onClick?: (event: Event) => void;
  @property({ type: Object }) user: { name: string; age: number } = { name: 'John Doe', age: 25 };
  @property({ type: Array }) items: string[] = ['Item 1', 'Item 2', 'Item 3'];

  //Internal State
  @state() counterCount: number = 0;
  @state() users: any[] = [];

  increment= () => {
    this.counterCount += 1;
  }

  // Fire API calls

   firstUpdated() {
    this.fetchData();
  }

  fetchData = async () => {
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      this.users = data;
      console.log('users', this.users);
    }catch(error){
      console.error('Fetch Error:', error);
    }
    
  }

  // Render method for the component
  render() {
    console.log('Hi');
    return html`
      <h2>${this.title}</h2>
      <p>Count: ${this.count}</p>
      <p>Is Enabled: ${this.isEnabled ? 'Yes' : 'No'}</p>
      <p>User: ${this.user.name}, Age: ${this.user.age}</p>
      <ul>
        ${this.items.map(item => html`<li>${item}</li>`)}
      </ul>
      <button @click=${this.handleClick}>Click Me</button>
      <button @click="${this.increment}">IncreaseCount</button>
      <div>${this.counterCount}</div>
      <h2>User List</h2>
      ${this.users.length === 0
        ? html`<p>Loading...</p>`
        : html`
            <ul>
              ${this.users.map(
                (user) => html`
                  <li>
                    <strong>${user.name}</strong> - ${user.email}
                  </li>
                `
              )}
            </ul>
          `}
    `;
  }

  // Internal click handler
  private handleClick(event: Event) {
    if (this.onClick) {
      this.onClick(event); // Trigger the event callback
    }
  }
}
