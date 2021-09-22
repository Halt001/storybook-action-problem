import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class MyWebComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--my-web-component-text-color, #000);
    }
  `;

  @property({ type: String }) title = 'Hey there';

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;
    this.fireCustomEvent();
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }

  private fireCustomEvent() {
    let event = new CustomEvent('counter-increase', {
      detail: {
        message: `Counter value is: ${this.counter}`,
      }
    });
    this.dispatchEvent(event);
  }
}
