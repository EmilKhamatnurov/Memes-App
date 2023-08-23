class Viev {
	constructor( {onImageChange} ) {
		// Элементы input
		this.imageSelectorNode = document.querySelector('#imageSelector');
		this.topTextInputNode = document.querySelector('#topTextInput');
		this.bottomTextInputNode = document.querySelector('#bottomTextInput');
		// Элемиенты output
		this.imageOutputNode = document.querySelector('#imageOutput');
		this.topTextOutputNode = document.querySelector('#topTextOutput');
		this.bottomTextOutputNode = document.querySelector('#bottomTextOutput');

		this.onImageChange = onImageChange;
		this.imageSelectorNode.addEventListener('change', this.a)
	}

	a = () => {
		this.onImageChange(this.imageSelectorNode.value)
	}

	renderImageOptions(memes) {
		// Рендер опций картинок
		memes.forEach(mem => {
			this.imageSelectorNode.innerHTML +=
			`<option value="${mem.id}" class="option-text">${mem.name}</option>`
		});
	}

	_renderMemImage = ({url,width,height}) => {
		this.imageOutputNode.style.background = `url(${url}) center center / cover no-repeat`;
		this.imageOutputNode.style.width = ` ${width}px`
		this.imageOutputNode.style.height = `${height}px`
	}

	textInputChanged = () => {
		this.onImageChange(this.topTextInputNode.value, this.bottomTextInputNode.value);
	}
}
