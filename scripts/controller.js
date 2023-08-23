class Controller {
	constructor() {
		this.api = new API();
		this.model = new Model({
			onImageChange: this.handleImageChange
		});

		this.viev = new Viev({
			onImageChange: this.handleImageInputChange,
		});
	}

	init() {
		this.api.fetchMemes()
			.then(response => {
				console.log(response);
				this.model.saveMemes(response.data.memes);
				this.viev.renderImageOptions(this.model.memes);
				// console.log(this.model.memes);
			})
	}

	// handleTopTextChanged(a, b) {
	// 	console.log(a, b);
	// }
	handleImageInputChange = (memId) => {
		console.log(memId);
		this.model.setImage(memId);
	}

	handleImageChange = (memObject) => {
		this.viev._renderMemImage(memObject);
	}

}