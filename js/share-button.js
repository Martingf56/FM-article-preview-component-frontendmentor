

function clickShare() {
	var element = document.getElementsByClassName("tooltiptext")[0];
  
	if(element.style.display === 'flex') {
		element.style.display = "none";
		document.getElementsByClassName("card-article-info-share")[0].style.backgroundColor = "hsl(210, 46%, 95%)";
		document.getElementById("path-svg-image-share").style.fill = ''//return the original value
	}
  	else {
		element.style.display = "flex";
		document.getElementsByClassName("card-article-info-share")[0].style.backgroundColor = "hsl(214, 17%, 51%)";
		document.getElementById("path-svg-image-share").style.fill = 'white'
	}

}