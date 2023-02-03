const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const cpu = document.querySelector(".battle img:last-child");

let leftFist = document.querySelector(".battle img:first-child");

document.querySelector(".paper").addEventListener("click", function () {
  leftFist.src = "./images/paper_1.png";
});

document.querySelector(".scissors").addEventListener("click", function () {
  leftFist.src = "./images/scissors_1.png";
});

document.querySelector(".rock").addEventListener("click", function () {
  leftFist.src = "./images/rock_1.png";
});

rock.addEventListener("click", function () {
  const cpuChoice = Math.floor(Math.random() * 3) + 1;

  if (cpuChoice === 1) {
    cpu.src = "./images/rock_invert.png";
    alert("Draw! You both chose rock.");
  } else if (cpuChoice === 2) {
    cpu.src = "./images/paper_invert.png";
    alert("You lost! The CPU chose paper.");
  } else if (cpuChoice === 3) {
    cpu.src = "./images/scissors_intert.png";
    alert("You won! The CPU chose scissors.");
  }
});

paper.addEventListener("click", function () {
  const cpuChoice = Math.floor(Math.random() * 3) + 1;

  if (cpuChoice === 1) {
    cpu.src = "./images/rock_invert.png";
    alert("You won! The CPU chose rock.");
  } else if (cpuChoice === 2) {
    cpu.src = "./images/paper_invert.png";
    alert("Draw! You both chose paper.");
  } else if (cpuChoice === 3) {
    cpu.src = "./images/scissors_intert.png";
    alert("You lost! The CPU chose scissors.");
  }
});

scissors.addEventListener("click", function () {
  const cpuChoice = Math.floor(Math.random() * 3) + 1;

  if (cpuChoice === 1) {
    cpu.src = "./images/rock_invert.png";
    alert("You lost! The CPU chose rock.");
  } else if (cpuChoice === 2) {
    cpu.src = "./images/paper_invert.png";
    alert("You won! The CPU chose paper.");
  } else if (cpuChoice === 3) {
    cpu.src = "./images/scissors_intert.png";
    alert("Draw! You both chose scissors.");
  }
});

/*const cpuHand = document.querySelector(".cpu");
let jumps = 0;

function jump() {
  jumps++;
  cpuHand.style.bottom = `${20 * Math.sin((jumps * Math.PI) / 3)}px`;
  if (jumps >= 3 * 2) {
    clearInterval(intervalId);
    // Announce the result of the game here
  }
}*/

var cpuHand = document.querySelector(".cpuHand img");

// Animate the .cpuHand element
cpuHand.style.animation = "jump 3s ease-in-out infinite";

// Change the image of the cpuHand
function updateCpuHand() {
  var randomNumber = Math.floor(Math.random() * 3) + 1;
  var cpuChoice;
  if (randomNumber === 1) {
    cpuChoice = "./images/rock_1.png";
  } else if (randomNumber === 2) {
    cpuChoice = "./images/paper_1.png";
  } else {
    cpuChoice = "./images/scissors_1.png";
  }
  cpuHand.src = cpuChoice;
}

document.querySelector(".rock").addEventListener("click", function () {
  leftFist.src = "./images/rock_1.png";
  cpu.classList.add("move-cpuHand");
});

document.querySelector(".paper").addEventListener("click", function () {
  leftFist.src = "./images/paper_1.png";
  cpu.classList.add("move-cpuHand");
});

document.querySelector(".scissors").addEventListener("click", function () {
  leftFist.src = "./images/scissors_1.png";
  cpu.classList.add("move-cpuHand");
});

let button = document.querySelector("button");
let box = document.querySelector(".box");

button.addEventListener("click", function () {
  box.classList.add("animate");
  setTimeout(function () {
    box.classList.remove("animate");
    let result = box.classList.contains("animate")
      ? "animation is still running"
      : "animation is complete";
    alert(result);
  }, 2000);
});

let displayResult = () => {
  // your animation code here
  setTimeout(() => {
    // your alert code here
    alert("Result: " + result);
  }, 3000); // delay the alert for 3 seconds after the animation is complete
};
