const boxes = document.querySelectorAll('.drum').length;

for (var i = 0; i < boxes; i++) {

    var character = document.querySelectorAll(".drum")[i].classList[0];

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        playAudio(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

function playAudio(character) {
    var audioPath;

    switch (character) {
        case 'w':
            audioPath = "sounds/tom-1.mp3"
            break;

        case 'a':
            audioPath = "sounds/tom-2.mp3"
            break;

        case 's':
            audioPath = "sounds/tom-3.mp3"
            break;

        case 'd':
            audioPath = "sounds/tom-4.mp3"
            break;

        case 'j':
            audioPath = "sounds/snare.mp3"
            break;

        case 'k':
            audioPath = "sounds/crash.mp3"
            break;

        case 'l':
            audioPath = "sounds/kick-bass.mp3"
            break;

        default:
            break;
    }

    var audio = new Audio(audioPath);
    audio.play();
}

document.addEventListener("keydown", function(event){
    console.log(event.key);
    var character = event.key;
    switch (character) {
        case 'w':
            audioPath = "sounds/tom-1.mp3"
            break;

        case 'a':
            audioPath = "sounds/tom-2.mp3"
            break;

        case 's':
            audioPath = "sounds/tom-3.mp3"
            break;

        case 'd':
            audioPath = "sounds/tom-4.mp3"
            break;

        case 'j':
            audioPath = "sounds/snare.mp3"
            break;

        case 'k':
            audioPath = "sounds/crash.mp3"
            break;

        case 'l':
            audioPath = "sounds/kick-bass.mp3"
            break;

        default:
            audioPath = ""
            break;
    }

    if(audioPath != ""){
        var audio = new Audio(audioPath);
        audio.play();
    }

})


function buttonAnimation(currentKey){

    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}

