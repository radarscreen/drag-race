window.onload = function() {

var racecar = document.getElementById("racecar");
racecar.style.left = "0px";
racecar.style.top = "20px";

var Racecar = function() {
	this.state = "off";
};

var counter = 0;
var ChristmasTree = function(){
	return;
};
// var Christmastree = function(){
// 	this.prestageLights = prestageLights;
// };
// Christmastree.prototype.stageOn = function(){
// 	this.prestageLights.setAttribute("id", "green");
// };
// function turnGreen (event) {
// 	event.target.style.backgroundColor = "green";
// }
window.addEventListener("keydown", function(event){
	if(event.keyCode === 13) {
		racecar.state = "on";
		document.getElementById("one").setAttribute("class", "begin");
		document.getElementById("two").setAttribute("class", "begin");
		document.getElementById("three").setAttribute("class", "begin");
		document.getElementById("four").setAttribute("class", "begin");
		// christmasTree.stageCheck();
	}
		if(event.keyCode === 39 && racecar.state ==="on") {
		racecar.style.left = parseInt(racecar.style.left, 10) + 15 + "px";
		counter++;
		console.log("The counter is now " + counter);
			if(counter===9){
			document.getElementById("five").setAttribute("class", "begin");
			document.getElementById("six").setAttribute("class", "begin");
			document.getElementById("seven").setAttribute("class", "begin");
			document.getElementById("eight").setAttribute("class", "begin");
		} if(counter===58) {
			alert("You won!");
		}

		  if(counter===10){
		  	console.log("ten");
		  	var startLights;
			changeColor();

			function changeColor() {
				console.log("changeColor");
  				startLights = setInterval(lightChange, 500);
				console.log(startLights);			
			}
			// console.log("the counter equals" + counter) 
 
			var bigLights = ["rowZero", "rowOne", "rowTwo"];
			var position = 0;

			function lightChange() {
				console.log("lightChange " + bigLights[position]);
  				// if ( the first three ) {
	  				var lights = document.getElementsByClassName(bigLights[position]);
	  				console.log('lights is : ' + lights);
	  				console.dir(lights);
	  				lights = Array.prototype.slice.call(lights);
	  				lights.forEach(function(light){
	  					console.log('light: ' + light);
	  					//light.setAttribute('class', 'yellow');
	  					light.classList.add('yellow')
	  				});
	  			// } else 
	  			if (position === 3){
	  				// if counter < X
	  				//     turn on green light
	  				// else
	  				//     turn on read
  					stopLightColor();
  				}
  				position++;
			}
 
			function stopLightColor() {
				console.log("stopLightColor");
  				clearInterval(startLights);
			}
			
		  }
		}
		// if(winner.style.left > "120px" function stageOn(){
		// 		winner.
		// })
});		
		


		ChristmasTree.prototype.stageCheck = function() {
			if (parseInt(racecar.style.left, 10) > 148) {
			xmasTree.$trafficLight.className = "start";
			}
		};



// Racecar.prototype.reset = function(){

// }

// var x = document.getElementById("blah");


function Racetrack() {
    this.element = document.getElementById("racetrack"); 
    this.element.style.backgroundColor = 'green';
    this.element.style.height = '110px';
    this.element.style.width = '1100px';
}

Racetrack();

function Racecar() {
	this.element = document.getElementById("racecar");
}
};