//function randomColor() {
//    // letters is an array:  ['A','B','C','D','E"]
//		var letters = 'ABCDE'.split('');
//    // prepend the colors variable with the pound symbol
//		var color = '#';
//    
//		for (var i=0; i<3; i++ ) {
//        color += letters[Math.floor(Math.random() * letters.length)];
//    }
//    return color;
//}

function randomColor(brightness){

    // Six levels of brightness from 0 to 5, 0 being the darkest
    var rgb = [Math.random() * 256, Math.random() * 256, Math.random() * 256];
    var mix = [brightness*51, brightness*51, brightness*51]; //51 => 255/5
    var mixedrgb = [rgb[0] + mix[0], rgb[1] + mix[1], rgb[2] + mix[2]].map(function(x){ return Math.round(x/2.0)})
    return "rgb(" + mixedrgb.join(",") + ")";
}


$(document).ready(function(){
	
	$(function(){	$('#menu').slicknav({
		label: 'I\'m small',
		prependTo: 'body',
		duration: 450
	});});
	
	var greeting = document.getElementById('greeting');
	var strArray = greeting.innerText.split('');
	greeting.innerText = '';
	
	strArray.forEach(function(letter, index){
  // wrap every letter in a span.  
  var tempSpan = document.createElement('span');
  // create a textNode for each letter
	var tempTextNode = 	document.createTextNode(letter);
  tempSpan.appendChild(tempTextNode);
	// append the testNode to the newly created span
	var tempColor = randomColor(2);
	// get a random color
	tempSpan.style.color = tempColor;
	// apply the color to the new span

	setTimeout(function(){
  greeting.appendChild(tempSpan);  
  }, index*150)});
	

});
	

	