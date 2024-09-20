const playlist = [
  {
    id: 1,
    title: "Dream On",
    artist: "Aerosmith",

    duration: "4:26",
    src: "src/assets/audio/Aerosmith - Dream On.mp3",
    cover: "src/assets/img/Aerosmith - Dream On.jpg",
  },
  {
    id: 2,
    title: "No Woman No Cry",
    artist: "Bob Marley",

    duration: "4:11",
    src: "src/assets/audio/Bob Marley - No Woman No Cry.mp3",
    cover: "src/assets/img/Bob Marley - No Woman No Cry.jpg",
  },
  {
    id: 3,
    title: "Looking for the Summer",
    artist: "Chris Rea",

    duration: "4:57",
    src: "src/assets/audio/Chris Rea - Looking for the Summer.mp3",
    cover: "src/assets/img/Chris Rea - Looking for the Summer.jpg",
  },
  {
    id: 4,
    title: "Riders On The Storm",
    artist: "Doors",

    duration: "6:54",
    src: "src/assets/audio/Doors - Riders On The Storm.mp3",
    cover: "src/assets/img/Doors - Riders On The Storm.jpg",
  },
  {
    id: 5,
    title: "Hotel California",
    artist: "Eagles",

    duration: "6:31",
    src: "src/assets/audio/Eagles - Hotel California.mp3",
    cover: "src/assets/img/Eagles - Hotel California.jpg",
  },
  {
    id: 6,
    title: "Behind_Blue_Eyes",
    artist: "Limp_Bizkit",

    duration: "4:28",
    src: "src/assets/audio/Limp_Bizkit_-_Behind_Blue_Eyes.mp3",
    cover: "src/assets/img/Limp_Bizkit_-_Behind_Blue_Eyes.jpg",
  },
  {
    id: 7,
    title: "Bohemian_Rhapsody",
    artist: "Queen",

    duration: "5:58",
    src: "src/assets/audio/Queen_-_Bohemian_Rhapsody.mp3",
    cover: "src/assets/img/Queen_-_Bohemian_Rhapsody.jpg",
  },
];
const root = document.getElementById("root");

const firstTrack = playlist.find((track) => track.id === 1);

const html = `
<audio></audio>
<div class="audio">
<div class="audio_wrapper">
        <img
          class="audio_image"
          src="./src/assets/img/Aerosmith - Dream On.jpg"
          id="thumbnail"
        />
        </div>
        <div class="audio_details">
          <div class="details_controls">
            <img
              class="btn-play"
              src="./src/assets/svg/play.png"
              onclick="togglePlay()"
              id="play-pause"
            />
            <div class="details_artist-title">
              <div class="song-artist" id="song-artist">${firstTrack.artist}</div>
              <div class="song-title" id="song-title">${firstTrack.title}</div>
            </div>

            <div class="details_back-fwd">
              <img
                class="btn"
                src="./src/assets/svg/backward.png"
                onclick="previous()"
                id="previous-song"
              />
              <img
                class="btn"
                src="./src/assets/svg/forward.png"
                onclick="next()"
                id="next-song"
              />
            </div>
          </div>
          <div class="durationTime" id="durationTime">${firstTrack.duration}</div>
          <input
            type="range"
            id="progress-bar"
            min="0"
            max="100"
            value="00"
            onchange="changeProgressBar()"
          />
          <div class="currentTime" id="currentTime">0:00</div>
        </div>
      </div>
`;
root.insertAdjacentHTML("afterbegin", html);

const audio = document.querySelector("audio");
const body = document.querySelector("body");
const thumbnail = document.getElementById("thumbnail");
const playPauseButton = document.getElementById("play-pause");
const currentTime = document.getElementById("currentTime");
const durationTime = document.getElementById("durationTime");
const songArtist = document.getElementById("song-artist");
const songTitle = document.getElementById("song-title");
const progressBar = document.getElementById("progress-bar");

let id = 1;
let isPlay = false;

function playAudio(id, time = 0) {
  const playlistTrack = playlist.find((track) => track.id === id);

  audio.src = playlistTrack.src;
  thumbnail.src = playlistTrack.cover;
  songArtist.textContent = playlistTrack.artist;
  songTitle.textContent = playlistTrack.title;
  durationTime.textContent = playlistTrack.duration;
  body.style.backgroundImage = `url(${thumbnail.src})`;
  currentTime.textContent = formatTime(time);
  audio.currentTime = time;
  audio.play();
  audio.addEventListener("timeupdate", updateCurrentTime);
}

function updateCurrentTime() {
  currentTime.textContent = formatTime(audio.currentTime);
  progressBar.value = (audio.currentTime / audio.duration) * 100;
  if (audio.currentTime === audio.duration) next();
}

function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec < 10 ? "0" + sec : sec}`;
}

function pauseAudio() {
  audio.pause();
}

function togglePlay() {
  isPlay = !isPlay;
  if (isPlay) {
    playAudio(id, audio.currentTime);
    playPauseButton.src = "./src/assets/svg/pause.png";
    thumbnail.classList.add("scale");
  } else {
    pauseAudio(id);
    playPauseButton.src = "./src/assets/svg/play.png";
    thumbnail.classList.remove("scale");
  }
}

function next() {
  id = id + 1;
  if (id > playlist.length) id = 1;
  playAudio(id);
}

function previous() {
  id = id - 1;
  if (id < 1) id = playlist.length;
  playAudio(id);
}

function changeProgressBar() {
  pauseAudio();
  playAudio(id, (progressBar.value / 100) * audio.duration);
}
