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
			})
			this.viev._renderInputsAndOutpust(this.model.memes[0].box_count)
			this.viev._createTextDraggable();
		})
	}

	handleImageInputChange = (memId) => {
		this.model.getImage(memId);
	}

	handleImageChange = (memObject, box_count) => {
		this.viev._renderMemImage(memObject);
		this.viev._renderInputsAndOutpust(box_count);
	}

}