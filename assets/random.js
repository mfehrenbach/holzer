const randomTruism = () => {
	const truisms = document.querySelectorAll('li')
	const random = Math.floor((Math.random() * truisms.length))

	truisms[random].classList.add('current')
	document.title = truisms[random].innerHTML.replaceAll('&nbsp;', ' ')
}



document.addEventListener('DOMContentLoaded', () => {
	randomTruism()
})