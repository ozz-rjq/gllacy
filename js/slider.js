// additional slider properties

;(function(){

	//slider control elements
	var slide1Input = document.querySelector("#slide1");
	var slide2Input = document.querySelector("#slide2");
	var slide3Input = document.querySelector("#slide3");
	var inputs = document.querySelectorAll("[name=toggle-slide");
	var selectedSlide = document.querySelector("[name=toggle-slide][checked]");

	//slides themselves
	var slide1 = document.querySelector(".slide.slide1");
	var slide2 = document.querySelector(".slide.slide2");
	var slide3 = document.querySelector(".slide.slide3");

	var currentSlide;
	var mainIntervalID = window.setInterval(nextSlide, 10000);

	//right arrow listener
	window.addEventListener("keydown", function(event){
		if(event.keyCode === 39){
			nextSlide();
		}
	});

	//left arrow listener
	window.addEventListener("keydown", function(event){
		if(event.keyCode === 37){
			previousSlide();
		}
	});

	function getCurrentSlide(){
		var cs;

		for(i=0; i<inputs.length; i++){
			if(inputs[i].checked === true)
				cs = i;
		}

		return cs;
	}

	function nextSlide(){
		currentSlide = getCurrentSlide();
		currentSlide++;

		if(currentSlide === inputs.length){
			currentSlide = 0;
		}

		for(i=0; i<inputs.length; i++){
			inputs[i].checked === false;
		}

		inputs[currentSlide].checked = true;
	}

	function previousSlide(){
		currentSlide = getCurrentSlide();
		currentSlide--;

		if(currentSlide < 0){
			currentSlide = inputs.length - 1;
		}

		for(i=0; i<inputs.length; i++){
			inputs[i].checked === false;
		}

		inputs[currentSlide].checked = true;
	}
}());