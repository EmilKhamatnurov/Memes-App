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
		const outputFields = document.querySelectorAll('[data-textoutput]');
		console.log(outputFields);
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
		for (let index = 0; index < box_count; index++) {
			// Ренден полей ввода текста
			this.inputsFieldsNode.innerHTML += 
			`<div class="input-wrapper">
				<p class="input-label">Текст ${index}</p>
				<input data-textInput="${index}" id="topTextInput" type="text" class="input-field">
			</div>`;

			// Рендер элементов вывода текста
			this.outputsFieldNode.innerHTML += 
			`<div data-textOutput="${index}" class="mem-text"></div>`;
		}
	}

	typeText (element) {
		const inputField = element.target.closest(`input`);
		const outputField = document.querySelector(`div[data-textoutput='${inputField.dataset.textinput}']`);
		outputField.innerText = inputField.value;
	}


	// ПОМЕНЯТЬ
	// topTextChange = () => {
	// 	if (this.topTextInputNode.value.length > 30) {
	// 		return
	// 	}
		
	// }

	bottomTextChange = () => {
		if (this.bottomTextInputNode.value.length > 30) {
			return
		}
		this.bottomTextOutputNode.innerText = this.bottomTextInputNode.value;
	}
	
}
