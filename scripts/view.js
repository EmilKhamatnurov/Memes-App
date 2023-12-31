class Viev {
	constructor( {onImageChange} ) {
		// Элементы input
		this.imageSelectorNode = document.querySelector('#imageSelector');
		this.inputsFieldsNode = document.querySelector('#inputsFields');
		// Элемиенты output
		this.imageOutputNode = document.querySelector('#imageOutput');
		this.outputsFieldNode = document.querySelector('#outputsField'); 
		this.memImageNode = document.querySelector('#memImage'); 

		this.onImageChange = onImageChange;
		// Отработчики
		this.imageSelectorNode.addEventListener('change', this.selectOption)
		this.inputsFieldsNode.addEventListener('input', (element) => {this.typeText(element)}) 
	}

	selectOption = () => {
		this.onImageChange(this.imageSelectorNode.value);
		this._createTextDraggable();
	}

	_createTextDraggable = () => {
		const outputFields = document.querySelectorAll('[data-textoutput]');
		outputFields.forEach(field => {
			dragElement(field);
		});
	}

	renderImageOptions(memes) {
		memes.forEach(mem => {
			this.imageSelectorNode.innerHTML +=
			`<option value="${mem.id}" class="option-text">${mem.name}</option>`
		});
	}

	_renderMemImage = ({url,width}) => {
		this.memImageNode.src = `${url}`
		this.memImageNode.style.width = ` ${width}px`
	}

	_renderInputsAndOutpust = (box_count) => {
		this.inputsFieldsNode.innerHTML = '';
		this.outputsFieldNode.innerHTML = '';
		for (let index = 1; index <= box_count; index++) {
			// Ренден полей ввода текста
			this.inputsFieldsNode.innerHTML += this._buildInputHtml(index);
			// Рендер элементов вывода текста
			this.outputsFieldNode.innerHTML += this._buildOutputHtml(index);
		}
	}

	_buildInputHtml = (index) => {
		return `<div class="input-wrapper">
					<p class="input-label">Текст ${index}</p>
					<input 
						data-textInput="${index}" 
						id="topTextInput"
						class="input-field" 
						type="text">
				</div>`
	}

	_buildOutputHtml = (index) => {
		return `<div 
					data-textOutput="${index}" 
					class="mem-text"
					style="top:${index * 10}%; left: 50%;">
				</div>`
	}

	typeText (element) {
		const inputField = element.target.closest(`input`);
		const outputField = document.querySelector(`div[data-textoutput='${inputField.dataset.textinput}']`);
		outputField.innerText = inputField.value;
	}
	
}
