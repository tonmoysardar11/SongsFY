console.log("SongsFY")
// variables
let songIndex = 0;
let audioElem = new Audio('Warsaw.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songList= Array.from(document.getElementsByClassName('songItem'));
// audio list array
let songs = [
    { songName: 'Blank Space', filePath: 'Blank Space.mp3', coverPath: 'Blank Space.jpg' },
    { songName: 'Gangsta`s Paradise', filePath: 'Gangsta Paradise.mp3', coverPath: 'Gangsta Paradise.jfif' },
    { songName: 'Hall of Fame', filePath: 'Hall of Fame.mp3', coverPath: 'Hall of Fame.jpg' },
    { songName: 'Immortals', filePath: 'Immortals.mp3', coverPath: 'Immortals.jpg' },
    { songName: 'Let me love you', filePath: 'Let me love you.mp3', coverPath: 'Let me love you.jpg' },
    { songName: 'Memories', filePath: 'Memories.mp3', coverPath: 'Memories.jpg' },
    { songName: 'Something Just Like This', filePath: 'Something Just Like This.mp3', coverPath: 'Something Just Like This.jpg' },
    { songName: 'Story of my life', filePath: 'Story of my life.mp3', coverPath: 'Story of my life.jpg' },
    { songName: 'Battlefield Warsaw', filePath: 'Warsaw.mp3', coverPath: 'Warsaw.jpg' },
    { songName: 'Whatever it takes', filePath: 'Whatever it takes.mp3', coverPath: 'Whatever it takes.jpg' },
    { songName: 'Blank Space', filePath: 'Blank Space.mp3', coverPath: 'Blank Space.jpg' }
]

songList.forEach((element,i )=> {
    console.log(songs[i].coverPath)
    element.getElementsByClassName('albumArt')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
    // element.getElementsByClassName('timeStamp')[0].innerText=songs[i].duration;
});

// play/pause

masterPlay.addEventListener('click', () => {
    if (audioElem.paused || audioElem.currentTime <= 0) {
        audioElem.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        document.getElementById('gif').style.opacity=1;
        console.log('play');
    }
    else {
        audioElem.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        document.getElementById('gif').style.opacity=0;
        console.log('paused');
    }

});

// seekbar
audioElem.addEventListener('timeupdate',()=>{
console.log('timeupdate')
progress= ((audioElem.currentTime/audioElem.duration)*100);
myProgressBar.value=progress;
});

myProgressBar.addEventListener('change',()=>{
    audioElem.currentTime=myProgressBar.value*audioElem.duration/100;
});
// document.getElementById('img').img.src="Memories.jpg";