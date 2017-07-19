function Playlist(id, img, name, album) {
	
	"use strict";
    this.id = id;
	this.img = img;
	this.name = name;
	this.album = album;
}

var songOperations = {
    songsList : [],
    addSong : function (id, img, name, album) {
		"use strict";
        var song = new Playlist(id, img, name, album);
        this.songsList.push(song);
        console.log(this.songsList);
    },
	deleteSong : function () {
		"use strict";
		
	}
    /*toggleStudent : function (id) {
		"use strict";
        var songsList = this.songsList.filter(function (stud_obj) {
            return stud_obj.id == id;
        });
        songsList[0].selected = !songsList[0].selected;
        console.log("New Student List", songsList);
    },
    deleteStudent : function () {
		"use strict";
        this.songsList =  this.songsList.filter(function (stud_obj) {
            return stud_obj.selected == false;
        });
    }*/
};