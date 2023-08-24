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

	getImage = (memId) => {
		const mem = this.memes.find(object => object.id === memId);
		const box_count = this._getBoxCount(mem);
		this.onImageChange({
			url: mem.url,
			width: mem.width,
		}, box_count)
	}

	_getBoxCount = (mem) => {
		return mem.box_count
	}
}