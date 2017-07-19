function changeTheme() {
	"use strict";
	document.getElementById("container").classList.toggle("theme");
	document.getElementById("header").classList.toggle("theme");
	var ul = document.getElementById("ul").children;
	for (var i = 0; i < ul.length; ++i) {
		ul[i].classList.toggle("theme");
	}
}

function showList(show_hide) {
	"use strict";
	var list = document.getElementById("playlist");
	list.classList.toggle("hidden");
	var h3 = show_hide.srcElement;
	h3.parentElement.classList.toggle("playlist-prop");
	h3.classList.toggle("h3-prop");
}

function audio() {
	"use strict";
	var audio = document.getElementById("audio");
	//	console.log("audio", audio.children[0].attributes.src);
	audio.children[0].attributes.src.value = "assets/audio/AXE%20Daily%20Fragrance%20Pardeep.mp3";
	//	console.log("audio", audio.children[0].attributes.src);
}

function access2() {
	var x = document.getElementById("fa-th");
	var y = document.getElementById("access-2");
	y.classList.add("disable");
	x.addEventListener("click", function () {
		y.classList.toggle("disable");
	});
}

function showSidebar() {
//	console.log($('#sidebar')[0].children[0].children);
	$('#sidebar .section').click(function () {
		$(this)[0].nextElementSibling.classList.toggle("show");
	});
}

function playSong() {
	"use strict";
	var song = $('.img').click(function () {
//	console.log($(this)[0].nextElementSibling.children[0].innerHTML);
//to get the name of the song
		audio();
	});
}

function extra() {
	"use strict";
}

function prepareToAdd() {
	
}

function printSong(songId, songImg, songName, songAlbum) {
	var ul = document.getElementById("playlist");
	var li = document.createElement("li");
	li.appendChild(songImg);
	li.appendChild(songName)
	li.appendChild(songAlbum);
	ul.appendChild(li);
	var li = prepareToAdd();
}

function addSongToPlaylist() {
	"use strict";
	$('.img').on("click", function () {
		var song = $(this)[0];
		var songId = song.id;
		var songImg = song.children[0];
		var songName = song.nextElementSibling.firstElementChild;
		var songAlbum = songName.nextElementSibling;
//		var div = [songId, songImg, songName, songAlbum];
		songOperations.addSong(songId, songImg.src, songName.innerText, songAlbum.innerText);
		printSong(songId, songImg, songName, songAlbum);
	});
}

function init() {
	"use strict";
	
	//DONE - PLAYLIST SHOW AND HIDE
	document.getElementById("playlist-h3").addEventListener("click", showList);
	
	//DONE - NAV - SHOW OTHER OPTION
	access2();
	
	//DONE - NAV - CHANGE THEME
	document.getElementById("theme").addEventListener("click", changeTheme);
	
	// LEFT SIDEBAR IS SHOWN AND HIDE ON CLICK
	showSidebar();
	
	//TO PLAY SONG
	playSong();
	
	addSongToPlaylist();
}

window.addEventListener("DOMContentLoaded", init);