/*
	THIS BLOCK OF CODE WORKS, CORRESPONDING HTML BUTTON IS COMMENTED OUT IN HERO SECTION DIV ID = "viewModeButton"
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

/*
	OLD/UNUSED
document.addEventListener("DOMContentLoaded", () => {
	document.querySelector('switch').addEventListener("change", function () {
		lightMode(this.value);
	});
});	

const inputTest = document.querySelector('input:checked')
console.log(inputTest)

const themeSwitch = () => {
	let switchCheck = document.getElementById('switch')
	console.log('hi')
	if (switchCheck.checked === false) {
		console.log('hi')
	}
}*/


function applyTheme(theme) {
	document.body.classList.remove( "theme-light", "theme-dark");
	document.body.classList.add(`theme-${theme}`);
}


document.addEventListener("DOMContentLoaded", () => {
	const savedTheme = localStorage.getItem("theme") || auto;
	applyTheme(savedTheme);
	for (const optionElement of document.querySelectorAll("#selTheme option")){
		optionElement.selected = savedTheme === optionElement.value;
	}
	
	document.querySelector("#selTheme").addEventListener("change", function() {
		localStorage.setItem("theme", this.value);
		applyTheme(this.value);
	});
});