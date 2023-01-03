// console.log("SongsFY")
// variables
let songIndex = 0;
let audioElem = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songList = Array.from(document.getElementsByClassName('songItem'));
// audio list array
let songs = [
    { songName: 'Blank Space', filePath: '1.mp3', coverPath: '1.jpg' },
    { songName: 'Gangsta`s Paradise', filePath: '2.mp3', coverPath: '2.jpg' },
    { songName: 'Hall of Fame', filePath: '3.mp3', coverPath: '3.jpg' },
    { songName: 'Immortals', filePath: '4.mp3', coverPath: '4.jpg' },
    { songName: 'Let me love you', filePath: '5.mp3', coverPath: '5.jpg' },
    { songName: 'Memories', filePath: '6.mp3', coverPath: '6.jpg' },
    { songName: 'Something Just Like This', filePath: '7.mp3', coverPath: '7.jpg' },
    { songName: 'Story of my life', filePath: ' 8.mp3', coverPath: ' 8.jpg' },
    { songName: 'Battlefield Warsaw', filePath: '9.mp3', coverPath: '9.jpg' },
    { songName: 'Whatever it takes', filePath: ' 10.mp3', coverPath: ' 10.jpg' },
    { songName: 'Blank Space', filePath: '1.mp3', coverPath: '1.jpg' }
]

songList.forEach((element, i) => {
    // console.log(songs[i].coverPath)
    element.getElementsByClassName('albumArt')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;

});

// play/pause

masterPlay.addEventListener('click', () => {
    if (audioElem.paused || audioElem.currentTime <= 0) {
        audioElem.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        document.getElementById('gif').style.opacity = 1;
        // console.log('play');
    }
    else {
        audioElem.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        document.getElementById('gif').style.opacity = 0;
        // console.log('paused');
    }

});

// seekbar
audioElem.addEventListener('timeupdate', () => {
    // console.log('timeupdate')
    progress = ((audioElem.currentTime / audioElem.duration) * 100);
    myProgressBar.value = progress;
    var seconds = audioElem.currentTime % 60;
    var foo = audioElem.currentTime - seconds;
    var fixedSeconds= seconds.toFixed(2);
    var minutes = foo / 60;
    if (fixedSeconds < 10) {
        fixedSeconds = "0" + fixedSeconds.toString();
    }
    if (minutes < 10) {
        minutes = "0" + minutes.toString();
    }
    var fixedCurrentTime = minutes + ":" + fixedSeconds;

    var seconds2 = audioElem.duration % 60;
    var aaa = audioElem.duration - seconds2;
    var minutes2 = aaa / 60;
    var fixedSeconds2= seconds2.toFixed(2);
    if (fixedSeconds2 < 10) {
        fixedSeconds2 = "0" + fixedSeconds2.toString();
    }
    if (minutes2 < 10) {
        minutes2 = "0" + minutes2.toString();
    }
    var fixedDuration = minutes2 + ":" + fixedSeconds2;

    document.getElementById('ct').innerText = fixedCurrentTime;
    document.getElementById('dur').innerText = fixedDuration;
});

myProgressBar.addEventListener('change', () => {
    audioElem.currentTime = myProgressBar.value * audioElem.duration / 100;
});
// document.getElementById('img').img.src="Memories.jpg";

const songPlay = (element) => {
    Array.from(document.getElementsByClassName('playSong')).forEach((element) => {
        element.classList.remove('fa-pause')
        element.classList.add('fa-play')
        document.getElementById('gif').style.opacity = 0;
    })
}
const timeStamp = (element) => {
    Array.from(document.getElementsByClassName('timeStamp')).forEach((element) => {
        console.log(element.inner)
    })
}

Array.from(document.getElementsByClassName('playSong')).forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log(e.target)
        songPlay();
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElem.src = `${songIndex}.mp3`
        audioElem.play();
        audioElem.currentTime = 0;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        document.getElementById('gif').style.opacity = 1;
        document.getElementById('masterSong').innerText = songs[songIndex - 1].songName;
    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex > 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
        audioElem.src = `${songIndex}.mp3`
        document.getElementById('masterSong').innerText = songs[songIndex - 1].songName;
        audioElem.play();
        audioElem.currentTime = 0;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        document.getElementById('gif').style.opacity = 1;
    }
})

document.getElementById('back').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
        audioElem.src = `${songIndex}.mp3`
        document.getElementById('masterSong').innerText = songs[songIndex - 1].songName;
        audioElem.play();
        audioElem.currentTime = 0;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        document.getElementById('gif').style.opacity = 1;
    }
})


