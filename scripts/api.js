// 

class API {
	constructor() {
		this.baseUrl = 'https://api.imgflip.com/get_memes';
	}

	fetchMemes() {
		return fetch(this.baseUrl)
				.then(memesData => memesData.json())
	}
}