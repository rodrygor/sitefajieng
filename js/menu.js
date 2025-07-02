
window.addEventListener("scroll", function(){
	let header = document.querySelector('.site-nav')
	header.classList.toggle('rolagem',window.scrollY > 400)

})


 