//const viewModeButton = document.getElementById('switch');

const lightMode = (theme) => {
	if (document.documentElement.className == '') {
		document.documentElement.className = 'dark'
	} else if (document.documentElement.className == 'dark'){
		document.documentElement.className = 'light'
	} else if (document.documentElement.className == 'light') {
		document.documentElement.className = 'dark'
	} else {
		console.log('error')
	}
}

//viewModeButton.addEventListener(click, lightMode());

