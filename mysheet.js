const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const songs = [
    {
        name: "thenightwemeet",
        title: "the night we met",
        artist: "lord huron",
    },
    {
        name: "backtoyou",
        title: "back to you",
        artist: "selena gomez",
    },
    {
        name: "rasputin",
        title: "Rasputine",
        artist: "boney.m",

    },
    {
        name: "kebanu",
        title: "Ke banu Duniya da",
        artist: "Gurdas man & diljit",
    },
    {
        name: "thuglife",
        title: "Thug Life",
        artist: "Diljit dosanjh",
    },
    {
        name: "goat",
        title: "G.O.A.T",
        artist: "Diljit dosanjh",
    },
    {
        name: "plazo2",
        title: "PALAZZO 2",
        artist: "Shivjot",
    },
    {
        name: "timetable",
        title: "Time Table",
        artist: "Kulwinder Billa",
    },
    {
        name: "udarrian",
        title: "udaarian",
        artist: "Satinder Sartaj",
    },
    {
        name: "khabbi",
        title: "Khabbi Seat",
        artist: "Ammy Virk",
    },
    {
        name: "raule",
        title: "Raule",
        artist: "Jassa Dhillon",
    },
    {
        name: "ikko",
        title: "Ikko Mikke",
        artist: "Satinder Sartaj",
    },
    {
        name: "born",
        title: "Born to Shine",
        artist: "Diljit dosanjh",
    },
]
let isplaying = false;
const playmusic = () => {
    isplaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
};
const pausemusic = () => {
    isplaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
};

play.addEventListener("click", () => {
    if (isplaying) {
        pausemusic();
    }
    else {
        playmusic();
    }
});
const loadsong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src ="songs/"+ songs.name + ".m4a";
    if (("backtoyou" == songs.name) || ("thuglife" == songs.name) || ("ikko" == songs.name) || ("khabbi" == songs.name) || ("rasputin" == songs.name))
    {
        img.src = "images/" + songs.name + ".jpeg"

    }
    else
    {
        img.src = "images/" + songs.name + ".jpg"

    }
};
 songIndex = 0;

const nextsong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadsong(songs[songIndex]);
    playmusic();

};
const prevsong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadsong(songs[songIndex]);
    playmusic();

};
next.addEventListener("click", nextsong);
prev.addEventListener("click", prevsong);


