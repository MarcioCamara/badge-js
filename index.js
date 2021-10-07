class BadgeJs extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: 'closed' });
  }

  connectedCallback() {
    const template = `
      <style>
        :host {
          display: inline-block;
        }

        .badge {
          background-color: ${this.getAttribute('bgColor') || 'black'};
          color: ${this.getAttribute('color') || 'white'};
          padding: 1ch;
          display: ${this.getAttribute('format') === 'circle' ? 'flex' : 'inline-block'};
          align-items: center;
          justify-content: center;
          border-radius: ${this.getAttribute('format') === 'squircle' ? '33%' : this.getAttribute('format') === 'circle' ? '50%' : '0%'};
          height: ${this.getAttribute('format') === 'circle' ? '1.75rem' : 'auto'};
          width: ${this.getAttribute('format') === 'circle' ? '1.75rem' : 'auto'};
        }
      </style>

      <div class="badge">
        <slot></slot>
      </div>
    `;

    this.shadow.innerHTML = template;
  }
}

customElements.define('badge-js', BadgeJs);