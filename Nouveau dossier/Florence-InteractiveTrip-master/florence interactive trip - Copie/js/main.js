$(document).ready(function(){

	
setInterval(function() {
 	var opacite;
	var date = new Date();
	var h=date.getHours();
	var m= date.getMinutes();
	var s= date.getSeconds();

//format

		if (h<10) {h = "0" + h}

		if (m<10) {m = "0" + m}

		if (s<10) {s = "0" + s}
	 //h=19;
	//$('h1.hour').html("date");
	$('h1.hour').html(h+":"+m+":"+s );
	//var opacite = -0.0166666*sec+1; 

/**
* gestion pin Musee
**/
if (h >=9 && h < 14 ) {
	$(".musee").show();
}else{
	$(".musee").hide();
};

/**
* gestion pin Resto
**/
	if(h >=12 && h < 14 || h >= 19 && h < 22){
		$(".resto").show();
	}else{
		$(".resto").hide();
	}

/**
* gestion pin Beuverie
**/
	if(h >=18 || h < 2){
		$(".beuverie").show();
	}else{
		$(".beuverie").hide();
	}


/**
* calcul opacité
**/
	if (h >= 12) {
		opacite = (1/-12)*h+1;
	}else{
		opacite = (1/-12)*h+1;
	};
	
	$('h1.op').html(opacite);
 	$('#noir').css({opacity:opacite});

/*if(sec > 20 && sec < 22){
	alert('super');
}*/


}, 1);


	
});