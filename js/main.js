function randomColor() {
    var letters = 'ABCDE'.split('');
    var color = '#';
    for (var i=0; i<3; i++ ) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
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
  var tempTextNode = 	document.createTextNode(letter);
  tempSpan.appendChild(tempTextNode);
	var tempColor = randomColor();
	tempSpan.style.color = tempColor;
	setTimeout(function(){
  greeting.appendChild(tempSpan);  
  }, index*150)});
	

});
	

	