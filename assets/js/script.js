
// database: 
images = [

	{
		"path": "assets/images/diamond.png",
		"link": "https://www.youtube.com/watch?v=QHse6q92lb0",
		"height": 1280
	},

	{
		"path": "assets/images/baguette.png",
		"link": "https://www.amazon.com/Simulation-Pillow-Lumbar-Cushion-Stuffed/dp/B07SHP29DM/?tag=readerwp-20&th=1",
		"height": 289
	},
	{
		"path": "assets/images/eiffel-tower.png",
		"link": "https://open.spotify.com/track/6fuO9uk9wbjCHvQJqk2Qpx?si=42f9e2b4f16b4f8a",
		"height": 670
	}]
$(document).ready(function () {
	$(".dropdown-trigger").dropdown();
	let slideIndex = getRandomInt(0, images.length - 1);


	loadSLide(images[slideIndex])
	function nextSlide() {

		// console.log("images length", images.length)
		//  linear image pass
		// if (slideIndex + 1 >= images.length) {
		// 	slideIndex = 0
		// } else {
		// 	slideIndex++;
		// }


		let currSlide = slideIndex
		// random index:
		while (currSlide == slideIndex) {
			slideIndex = getRandomInt(0, images.length - 1);
		}
		console.log(slideIndex);

		loadSLide(images[slideIndex])

	}
	function loadSLide(image) {
		container = $(".container");
		div = $("#image-div")
		// setup background
		div.css("background-image", "url(" + image['path'] + ")");
		// setup background and click to link:
		div.click(function () {
			window.open(image['link'])
		});
		// set background size
		div.css("background-size", "45%")




	}

	var intervalId = window.setInterval(function () {
		nextSlide()
	}, 3000);

	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}




});