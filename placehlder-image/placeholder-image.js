'use strict';

export class PlaceholderImage extends HTMLElement {
	constructor() {
		super();
		const shadowRoot = this.attachShadow({ mode: 'open' });
	}

	basePlaceholderServiceURL() {
		return 'https://via.placeholder.com';
	}

	buildPlaceholderImagePath(width = 240, height = 160) {
		return `${this.basePlaceholderServiceURL}/${width}x${height}`;
	}

	buildImageElement(width = 240, height = 160) {
		let imgEl = document.createElement('img');
		imgEl.src = this.buildPlaceholderImagePath(width, height);
		imgEl.setAttribute('width', `${width}px`);
		imgEl.setAttribute('height', `${height}px`);
		imgEl.setAttribute('alt', 'Placeholder Image');
		imgEl.classList.add('placeholder-img');
		return imgEl;
	}

	render() {
		this.shadowRoot.appendChild(this.buildImageElement);
	}

	connectedCallback() {
		this.render();
	}
	disconnectedCallback() {

	}

}

customElements.define('placeholder-image', PlaceholderImage);


