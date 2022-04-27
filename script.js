const image = document.querySelector("img")
const title = document.getElementById("title")
const artist = document.getElementById("artist")
const music = document.querySelector("audio")
const prevBtn = document.getElementById("prev")
const playBtn = document.getElementById("play")
const nextBtn = document.getElementById("next")

const songs = [
	{
		name: "jacinto-1",
		displayName: "Electric chill Machine",
		artist: "Jacinto Design",
	},
	{
		name: "jacinto-2",
		displayName: "Seven Nation Army (Remix)",
		artist: "Jacinto Design",
	},
	{
		name: "jacinto-3",
		displayName: "Good Night, Disco Queen",
		artist: "Jacinto Design",
	},
	{
		name: "jacinto-4",
		displayName: "Front Row",
		artist: "Metric/Jacinto Design",
	},
]

// Check If Playing
let isPlaying = false

// Play
const playSong = () => {
	isPlaying = true
	playBtn.classList.replace("fa-play", "fa-pause")
	playBtn.setAttribute("title", "Pause")
	music.play()
}

// Pause
const pauseSong = () => {
	isPlaying = false
	playBtn.classList.replace("fa-pause", "fa-play")
	playBtn.setAttribute("title", "Play")
	music.pause()
}

// Update DOM
const loadSong = song => {
	title.textContent = song.displayName
	artist.textContent = song.artist
	music.src = `music/${song.name}.mp3`
	image.src = `img/${song.name}.jpg`
}

// Current Song
let songIndex = 0

// Prev Song
const prevSong = () => {
	songIndex--
	if (songIndex < 0) {
		songIndex = songs.length - 1
	}
	loadSong(songs[songIndex])
	playSong()
}

// Next Song
const nextSong = () => {
	songIndex++
	if (songIndex > songs.length - 1) {
		songIndex = 0
	}
	loadSong(songs[songIndex])
	playSong()
}

// On Load - Select First Song
loadSong(songs[songIndex])

// Play Or Pause Event Listener
playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()))

// Event Listeners
prevBtn.addEventListener("click", prevSong)
nextBtn.addEventListener("click", nextSong)
