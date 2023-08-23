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
		// Отработчики
		this.imageSelectorNode.addEventListener('change', this.selectOption)
		this.topTextInputNode.addEventListener('input', this.topTextChange)
		this.bottomTextInputNode.addEventListener('input', this.bottomTextChange)
	}

	selectOption = () => {
		this.onImageChange(this.imageSelectorNode.value)
	}

	renderImageOptions(memes) {
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

	topTextChange = () => {
		if (this.topTextInputNode.value.length > 30) {
			return
		}
		this.topTextOutputNode.innerText = this.topTextInputNode.value;
	}
	bottomTextChange = () => {
		if (this.bottomTextInputNode.value.length > 30) {
			return
		}
		this.bottomTextOutputNode.innerText = this.bottomTextInputNode.value;
	}
	
}
