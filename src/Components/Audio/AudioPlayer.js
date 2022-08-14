let selectedSong;

let audio = new Audio("");

audio.autoplay = true;

function base64ToArrayBuffer(base64) {

  var binaryString = window.atob(base64);
  var binaryLen = binaryString.length;
  var bytes = new Uint8Array(binaryLen);
  for (var i = 0; i < binaryLen; i++) {
     var ascii = binaryString.charCodeAt(i);
     bytes[i] = ascii;
  }

  return bytes;
}

export const chooseSong = (fileContents, title, id) => {
  const url = convertFileToUrl(fileContents);
  const song = getSong(title, url, id);
  setSelectedSongLink(song.link);
  loadTheSong();
  return song;
}

const isSongPlaying = () => {
  let isPlaying = false;
  if( isSelectedSongValid())
  {
    isPlaying = audio.currentTime !== 0;
  }
  return isPlaying;
}

const loadTheSong = () => {
  
  const songWasPlaying = isSongPlaying();
  
  if(songWasPlaying)
  {
    pauseAudio();
    audio.currentTime = 0;
  }

  setNewSongToAudio();

  if(songWasPlaying)
  {
    playAudio();
  }

}

const getSong = (title, url, id) => {
  return {songTitle : title, link: url, id: id };
}

const convertFileToUrl = (fileContents) => {
  const base64 = fileContents;
  const songBytes = base64ToArrayBuffer(base64);
  const blob = new Blob([songBytes], {type:'audio/mp3'});
  const url = window.URL.createObjectURL(blob)

  return url;
}

export const increaseVolume = (value) => {
  if(value <= 2)
    audio.volume = value;
}

export const decreaseVolume = (value) => {
  if(value >= 0)
    audio.volume = value;
}

const setSelectedSongLink = (selectedSongLink) => {
  selectedSong = selectedSongLink;
}

export const playAudio = () => {
  audio.play();
}

export const pauseAudio = () => {
  audio.pause();
}

export const getAudioStream = () => {
  let stream = audio.srcObject;
  let ms = audio.captureStream(stream);
  return ms;
  // return mediaStream;
}

export const setAudioStream = (stream) => {
  // audio.srcObject = stream;
  audio = new Audio("");
  audio.srcObject = stream;
  audio.autoplay = true;
  playAudio();
}

export const addSongEndedListener = (listenerfn) => {
  audio.addEventListener('ended', listenerfn)
}

const setNewSongToAudio = () => {
  if(isSelectedSongValid()) {
    audio = new Audio(selectedSong);
  }
}

const isSelectedSongValid = () => {
  return selectedSong !== null 
  && selectedSong !== undefined 
  && selectedSong !== "";
}