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
			this.model.saveMemes(response.data.memes);
			this.viev.renderImageOptions(this.model.memes);
			this.viev._renderMemImage({
				url: this.model.memes[0].url,
				width: this.model.memes[0].width,
				height: this.model.memes[0].height,
			})
		})
	}

	handleImageInputChange = (memId) => {
		console.log(memId);
		this.model.setImage(memId);
	}

	handleImageChange = (memObject) => {
		this.viev._renderMemImage(memObject);
	}

}