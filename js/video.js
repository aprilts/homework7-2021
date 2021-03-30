
// Identify HTML Elements
var playBtn = document.getElementById("play");
var pauseBtn = document.getElementById("pause");
var slowBtn = document.getElementById("slower");
var fastBtn = document.getElementById("faster");
var skipBtn = document.getElementById("skip");
var muteBtn = document.getElementById("mute");
var vintageBtn = document.getElementById("vintage");
var originalBtn = document.getElementById("orig");

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

	function playVid() {
		console.log("Play Video")
		video.play();
	}

	slider.addEventListener("change", function() {
		video.volume = this.value / 100;
		console.log(video.volume)

		volume.innerHTML = video.volume * 100 + "%"

	});

	function pauseVid() {
		console.log("Pause Video")
		video.pause();
	}

	function setPlaySpeedSlow() {
		video.playbackRate *=.95;
		console.log("New speed is " + video.playbackRate)
	}

	function setPlaySpeedFast() {
		video.playbackRate /= .95
		console.log("New speed is " + video.playbackRate)
	}

	function setCurTime() {
		vid.currentTime += 15;
	}