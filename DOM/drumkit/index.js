var numberofDrumButton = document.querySelectorAll(".drum").length;

for(var i = 0 i<numberofDrumButton; i++){
document.querySelectorall(".drum")[i].addEventListenner(click, handleClick())

Function handleClic{
 var buttonInnerHTML= this.innertext;
switch (buttonInnerHTML) {
  case "w":
    var audio = new audio("sounds/tom-1.mp3");
     audio.play();
    break;
  case "a":
    var audio = new audio("sounds/tom-2.mp3");
     audio.play();
    break;
  case "s":
    var audio = new audio("sounds/tom-3.mp3");
     audio.play();
    break;
  case "d":
    var audio = new audio("sounds/tom-4.mp3");
     audio.play();
    break;
  case "j":
    var audio = new audio("sounds/snare.mp3");
     audio.play();
    break;
  case "k":
    var audio = new audio("sounds/cymbal.mp3");
     audio.play();
    break;
  case "l":
    var audio = new audio("sounds/kick.mp3");
     audio.play();
    break;
}

}

}
    var audio = new audio("sounds/tom-1.mp3");
     audio.play();
