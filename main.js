// Variable declaration
const keys = document.querySelectorAll(".key");
var notes = [
  "q",
  "1",
  "w",
  "2",
  "e",
  "r",
  "3",
  "t",
  "4",
  "y",
  "5",
  "u",
  "i",
  "6",
  "o",
  "7",
  "p",
  "z",
  "a",
  "x",
  "s",
  "c",
  "d",
  "v",
];
var pitch = document.getElementById("pitch");
var rate = 1;
var audio;
// pitch control
window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    rate -= 0.25;
    if (rate < 0.5) {
      rate = 10;
    }
    pitch.textContent = rate;
  } else if (event.key === "ArrowRight") {
    rate += 0.25;
    if (rate > 10) {
      rate = 0.5;
    }
    pitch.textContent = rate;
  }
});
keys.forEach((key) => {
  var note = key.dataset.note;
  if (note.split("").splice(1, 1)[0] === "s") {
    key.parentNode.classList.add("black");
  }
  key.addEventListener("mousedown", () => {
    // Play the corresponding piano sound
    const audio = new Audio(`sounds/${note}.ogg`);
    audio.playbackRate = rate;
    audio.preservesPitch = false;
    audio.currentTime = 0; // Rewind to the start of the sound
    audio.play();
    pitch.textContent = rate;
  });
});

for (let i = 0; i < notes.length; i++) {
  var playNote = function (event) {
    if (event.key === notes[i]) {
      const audio = new Audio(`sounds/${keys[i].dataset.note}.ogg`);
      audio.playbackRate = rate;
      audio.preservesPitch = false;
      audio.currentTime = 0; // Rewind to the start of the sound
      audio.play();
      keys[i].parentNode.classList.add("keys");
    }
  };
  var endNote = function () {
    keys[i].parentNode.classList.remove("keys");
    // audio.pause();
  };
  window.addEventListener("keydown", playNote);
  window.addEventListener("keyup", endNote);
  window.addEventListener("touchstart", playNote);
  window.addEventListener("touchend", endNote);
}

// setTimeout(() => {
  for (let i = 0; i < notes.length; i++) {
    setTimeout(() => {
      const audio = new Audio(`sounds/${keys[i].dataset.note}.ogg`);
      audio.play();
      keys[i].parentNode.classList.add("keys");
      setTimeout(() => {
        keys[i].parentNode.classList.remove("keys");
        if(i == notes.length - 1){
          alert("check done");
        }
      }, 500);
    }, 500 * i);
  }
// }, 000);