class Viev {
	constructor() {
		// Элементы input
		this.imageSelectorNode = document.querySelector('#imageSelector');
		this.topTextInputNode = document.querySelector('#topTextInput');
		this.bottomTextInputNode = document.querySelector('#bottomTextInput');
		// Элемиенты output
		this.imageOutputNode = document.querySelector('#imageOutput');
		this.topTextOutputNode = document.querySelector('#topTextOutput');
		this.bottomTextOutputNode = document.querySelector('#bottomTextOutput');
	}

	renderOptions (memes) {
		// Генерация списка вариантов
		// this.imageSelectorNode.innerHTML = ``;
		// memes.keys('name').forEach(name => {
		// 	this.imageSelectorNode.innerHTML += `<option value="${name}" class="option-text">${name}</option>`
		// });

		memes.map(mem => console.log(mem))

		// this.imageOutputNode.style.background = `url(${mem.url}) center center / cover no-repeat`;
		// this.imageOutputNode.style.width = ``
	}

	handleImageChange = () => {

	}
}
