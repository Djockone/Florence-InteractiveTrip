$(document).ready(function(){

	
setInterval(function() {
 	var opacite;
	var date = new Date();
	var sec=date.getSeconds();
	$('h1.hour').html(date);
	//var opacite = -0.0166666*sec+1; test seconde
	sec=13;
	if (sec >= 12) {
		opacite = (-1/12)*sec+2;
	}else{

		opacite = (1/-12)*sec+1;
	};
	
	$('h1.op').html(opacite);
 	$('#noir').css({opacity:opacite});

/*if(sec > 20 && sec < 22){
	alert('super');
}*/


}, 1);


	
});