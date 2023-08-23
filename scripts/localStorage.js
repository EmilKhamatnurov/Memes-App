class LocalStorage {
	constructor(memName, topText, bottonText) {
		this.memNameLocal = localStorage.setItem('memName', memName);
		this.topTextLocal = localStorage.setItem('topText', topText);
		this.bottonTextLocal = localStorage.setItem('bottonText', bottonText);
	}

	_saveToLocal = (key ,value) => {
		localStorage.setItem(key, value);
	}
}