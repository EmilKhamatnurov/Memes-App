class Model {
	constructor({onImageChange}) {
		this.isError = false;
		this.memes = [];
		this.onImageChange = onImageChange

	}
	// Ограничение длины текста в 50 символов
	saveMemes(memesData) {
		this.memes = memesData.map(mem => {return mem});
	}

	setImage = (memId) => {
		const mem = this.memes.find(object => object.id === memId);

		this.onImageChange({
			url: mem.url,
			width: mem.width,
			height: mem.height
		})
			
	}

	// getMemes = () => {
	// 	return this.memes;
	// }

	// _isTextValid(text) {
	// 	return text.length > 50;
	// }
}