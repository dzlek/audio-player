const playlist = [
  {
    id: 1,
    title: "Dream On",
    artist: "Aerosmith",

    duration: "3:44",
    src: "src/assets/audio/Aerosmith - Dream On.mp3",
    cover: "src/assets/img/Aerosmith - Dream On.jpg",
  },
  {
    id: 2,
    title: "No Woman No Cry",
    artist: "Bob Marley",

    duration: "3:20",
    src: "src/assets/audio/Bob Marley - No Woman No Cry.mp3",
    cover: "src/assets/img/Bob Marley - No Woman No Cry.jpg",
  },
  {
    id: 3,
    title: "Looking for the Summer",
    artist: "Chris Rea",

    duration: "4:24",
    src: "src/assets/audio/Chris Rea - Looking for the Summer.mp3",
    cover: "src/assets/img/Chris Rea - Looking for the Summer.jpg",
  },
  {
    id: 4,
    title: "SRiders On The Storm",
    artist: "Doors",

    duration: "4:24",
    src: "src/assets/audio/Doors - Riders On The Storm.mp3",
    cover: "src/assets/img/Doors - Riders On The Storm.jpg",
  },
  {
    id: 5,
    title: "Hotel California",
    artist: "Eagles",

    duration: "4:24",
    src: "src/assets/audio/Eagles - Hotel California.mp3",
    cover: "src/assets/img/Eagles - Hotel California.jpg",
  },
  {
    id: 6,
    title: "Behind_Blue_Eyes",
    artist: "Limp_Bizkit",

    duration: "4:24",
    src: "src/assets/audio/Limp_Bizkit_-_Behind_Blue_Eyes.mp3",
    cover: "src/assets/img/Limp_Bizkit_-_Behind_Blue_Eyes.jpg",
  },
  {
    id: 7,
    title: "Bohemian_Rhapsody",
    artist: "Queen",

    duration: "4:24",
    src: "src/assets/audio/Queen_-_Bohemian_Rhapsody.mp3",
    cover: "src/assets/img/Queen_-_Bohemian_Rhapsody.jpg",
  },
];

const audio = document.querySelector("audio");

let id = 1;
let isPlay = false;

function playAudio(id) {
  audio.currentTime = 0;
  audio.src = playlist.find((track) => track.id === id).src;
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

function togglePlay() {
  isPlay = !isPlay;
  isPlay ? playAudio(id) : pauseAudio(id);
}

function next() {
  id = id + 1;
  console.log(id);
  playAudio(id);
}

function previous() {
  id = id - 1;
  console.log(id);
  playAudio(id);
}
