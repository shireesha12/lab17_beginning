/*eslint-env browser*/

var Jukebox = function () {
    "use strict";
    var albums = [], self;
    self = {
        addAlbum: function (album) {
            albums.push(album);
        },
        favoriteAlbum: function () {
            var max = 0, fav, i;
            
            for (i = 0; i < albums.length; i += 1) {
                if (albums[i].played > max) {
                    max = albums[i].played;
                    fav = albums[i];
                }
            }
            return fav.display();
        }
    };
    return self;
};

var Album = function (artist, album) {
    "use strict";
    var self = {
        played: 0,
        play: function () {
            this.played += 1;
        },
        display: function () {
           return artist + " \ " + album + "\". It's  been played " + this.played + " times.";
        }
    };
    return self;
};
//create jukeboX
var jukebox = new   Jukebox();
//create 3 albums
var album1 = new Album("Shakira", "Knock on my Door");
var album2 = new Album("A Tribe Called Quest", "The low end theory");
var album3 = new Album("Imagine Dragons", "Hell and Slience");
// add all 3 albums to jukebox
jukebox.addAlbum(album1);
jukebox.addAlbum(album2);
jukebox.addAlbum(album3);
//play albums
album1.play();
album1.play();
album1.play();
album2.play();
album3.play();
album1.play();
album3.play();

//display the album
window.console.log("You faviourte albim is :" + jukebox.favoriteAlbum());