class Viev {
	constructor( {onImageChange} ) {
		// Элементы input
		this.imageSelectorNode = document.querySelector('#imageSelector');
		this.inputsFieldsNode = document.querySelector('#inputsFields');
		// this.topTextInputNode = document.querySelector('#topTextInput');
		// this.bottomTextInputNode = document.querySelector('#bottomTextInput');
		// Элемиенты output
		this.imageOutputNode = document.querySelector('#imageOutput');
		this.memImageNode = document.querySelector('#memImage'); 
		// this.topTextOutputNode = document.querySelector('#topTextOutput');
		// this.bottomTextOutputNode = document.querySelector('#bottomTextOutput');
		this.outputsFieldNode = document.querySelector('#outputsField'); 

		this.onImageChange = onImageChange;
		// Отработчики
		this.imageSelectorNode.addEventListener('change', this.selectOption)
		// this.topTextInputNode.addEventListener('input', this.topTextChange)
		// this.bottomTextInputNode.addEventListener('input', this.bottomTextChange)
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





	// ПОМЕНЯТЬ
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
