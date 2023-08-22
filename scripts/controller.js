class Controller {
	constructor() {
		this.api = new API();
		this.model = new Model();
		this.viev = new Viev();
	}

	init() {
		this.api.fetchMemes()
			.then(response => {
				console.log(response);
				this.viev.renderOptions(`${response.data.memes}`)
			})
	}
}