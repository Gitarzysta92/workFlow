

class Cookie {
	constructor(name, value) {
		this.name = name;
		this.value = value;
		this.dateOffset = new Date().getTimezoneOffset();
		this.expiredDate = new Date();
	}

	set add(exTime) {
		const date = new Date();
		date.setTime(date.getTime() + (exTime * 60 * 1000) - (this.dateOffset * 60 * 1000));
		const expires = "expires="+date.toUTCString();
		//document.cookie = this.name + "=" + this.value + ";" + expires + ";path=/";
		//return this.name + "=" + this.value + ";" + expires + ";path=/";
		console.log(this.name + "=" + this.value + ";" + expires + ";path=/");
	}

	get remove() {
		return true;
	}

	checkCookie() {
		var name = cname + "=";
		var ca = document.cookie.split(';');
			for(var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') {
					c = c.substring(1);
				}
				if (c.indexOf(name) == 0) {
					return c.substring(name.length, c.length);
				}
			}
			return "";
	}

	checkCookie() {
		var user = getCookie("username");
		if (user != "") {
			alert("Welcome again " + user);
		} else {
			user = prompt("Please enter your name:", "");
			if (user != "" && user != null) {
				setCookie("username", user, 365);
			}
		}

	}
}

const cookie = new Cookie('text-cookie','dataHandler');
cookie.add = 3;


