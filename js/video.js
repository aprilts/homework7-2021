
// Console Logs
window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

var video = document.getElementById("player1");
var volume = document.querySelector("#volume");	
var slider = document.querySelector("#slider");
var play = document.querySelector("#play");
var pause = document.querySelector("#pause");
var slower = document.querySelector("#slower");
var faster = document.querySelector("#faster");
var skip = document.querySelector("#skip");
var mute = document.querySelector("#mute");
var vintage = document.querySelector("#vintage");
var original = document.querySelector("#orig");

	play.addEventListener("click", function() {
		console.log("Play Video")
		video.play();
		volume.innerHTML = video.volume * 100 + "%"
	}); 

	
	pause.addEventListener("click", function() {
		console.log("Pause Video")
		video.pause();
	});

	slider.addEventListener("change", function() {
		video.volume = this.value / 100;
		console.log(video.volume)
		
		volume.innerHTML = video.volume * 100 + "%";
	});

	slower.addEventListener("click", function(){
		video.playbackRate *=.95;
		console.log("New speed is " + video.playbackRate)
	});

	faster.addEventListener("click", function() {
		video.playbackRate /= .95
		console.log("New speed is " + video.playbackRate)
	});

	skip.addEventListener("click", function() {
		console.log("Original location " + video.currentTime)
		if (video.currentTime < video.duration - 15) {
			video.currentTime += 15;
			console.log("New location " + video.currentTime)
		}
		else {
			video.currentTime = 0;
			console.log("New location " + video.currentTime)
		}

	});

	mute.addEventListener("click", function(){
		console.log("Muting Video")
		if (video.muted == true) {
			this.innerHTML = "Mute";
			video.muted = false;
		}
		else {
			this.innerHTML = "Unmute";
			video.muted = true;
		}
	});

	vintage.addEventListener("click", function() {
		video.classList.add("oldSchool")
	});

	original.addEventListener("click", function(){
		video.classList.remove("oldSchool")
	});