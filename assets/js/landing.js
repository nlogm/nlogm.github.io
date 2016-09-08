function fadeIn(timeDelay){

	textElem = document.getElementById('page-content')
	
	$(document).ready(function(){
		$(textElem).hide();
		$(textElem).delay(timeDelay).fadeIn();
	});

}
