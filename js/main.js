function RandomColor() {
  var hex = (Math.round(Math.random()*0xffffff)).toString(16);
  while (hex.length < 6) hex = "0" + hex;
  return hex;
}




$(document).ready(function(){
	
	
	
	
	$(function(){	$('#menu').slicknav({
		label: 'I\'m small',
		prependTo: 'body' 
	});});
	
	var spanArray = [];
	
	var	greeting = document.getElementById('greeting');
	// gets "Hi, I'm Dayna!" and places each character into an array
	var greetingArray = greeting.innerText.split('');
	
	
	greetingArray.forEach(function(letter, i){
		
		
		
		setTimeout(function(i){
		var span = document.createElement('span');
		span.appendChild(document.createTextNode(letter));
		span.classList.add('colored');
		spanArray.push(span);
		console.log(spanArray);
		
		
	}, i*350);
		
		
	});
	
	// spanArray contains a span having a textNode containing every letter from greeting
	
	

	
	
	console.log(RandomColor());
	
	
});