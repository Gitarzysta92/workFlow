

class Cookie {
	constructor(name) {
		this.name = name;
		this.value = 'default';
		this.dateOffset = new Date().getTimezoneOffset();
		this.expiredDate = new Date();
	}

	set add(exTime) {
		const date = new Date();
		date.setTime(date.getTime() + (exTime * 60 * 1000) - (this.dateOffset * 60 * 1000));
		const expires = "expires="+date.toUTCString();
		console.log('Cookie ' + this.name + ' has been set');
		document.cookie = this.name + "=" + this.value + ";" + expires + ";path=/";
	}

	remove() {
		document.cookie = this.name + "=" + this.value + "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
	}

	get data() {
		const name = this.name + "=";
		const cookiesList = document.cookie.split(';');
			for (let i = 0; i < cookiesList.length; i++) {
				const cookie = cookiesList[i];

				// remove space
				while (cookie.charAt(0) == ' ') {
					cookie = cookie.substring(1);
				}

				// TO DO: refactor 
				// should check value with instance value property
				if (cookie.indexOf(name) == 0) {	
					return cookie.split('=')[1];
				}
			}
			return "";
	}
}

export { Cookie };