let size =  document.documentElement.clientWidth / 3.75
document.documentElement.style.fontSize = size + 'px'
window.onresize = function (){
	document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px'
}
