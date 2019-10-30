//variables

//selects blocks node list
const blocks = document.querySelectorAll('.block');
//gets widow size for limiting left right movement
let width = window.innerWidth;
//gets each block element by class name
const redBlock = document.querySelector('.block--red'); 
const blueBlock = document.querySelector('.block--blue');
const greenBlock = document.querySelector('.block--green');
const pinkBlock = document.querySelector('.block--pink');
const grayBlock = document.querySelector('.block--gray');
//stores amount block has moved
let redMove = 0;
let blueMove = 0;
let greenMove = 0;
let pinkMove = 0;
let grayMove = 0;
let buttonDownTimer;
let buttonUpTimer;


//functions/listeners

//reoders clicked element to top and shows journey with transition animation
blocks.forEach((block, i) => {
  block.style.order = `${++i}`
  block.style.transition = 'order .5s linear'
  block.addEventListener('click', () => {
    block.style.order = 0;
    blocks.forEach(block => block.style.order++);
  })
});

// listening for mouse up events and moving back all to the left
document.addEventListener('mouseup', () => {
  if (buttonDownTimer) {
    clearInterval(buttonDownTimer);
    buttonUpTimer = setInterval(() => {
      if (redMove > 0) {
        redBlock.style.left = `${redMove -= 10}px`;
      }
      if (blueMove > 0) {
        blueBlock.style.left = `${blueMove -= 10}px`;
      }
      if (greenMove > 0) {
        greenBlock.style.left = `${greenMove -= 10}px`;
      }
      if (pinkMove > 0) {
        pinkBlock.style.left = `${pinkMove -= 10}px`;
      }
      if (grayMove > 0) {
        grayBlock.style.left = `${grayMove -= 10}px`;
      }
    }, 100);
  }
});
//red block listeners
redBlock.addEventListener('mousedown', () => {
  redBlock.style.position = 'relative';
  buttonDownTimer = setInterval(() => {
    if (buttonUpTimer) clearInterval(buttonUpTimer);
    if (redMove < (width - 150)) {
      redBlock.style.left = `${redMove += 10}px`;
    }
  }, 100);
});

//blue block listeners
blueBlock.addEventListener('mousedown', () => {
  blueBlock.style.position = 'relative';
  buttonDownTimer = setInterval(() => {
    if (buttonUpTimer) clearInterval(buttonUpTimer);
    if (blueMove < (width - 150)) {
      blueBlock.style.left = `${blueMove += 10}px`;
    }
  }, 100);
});

//green block listeners
greenBlock.addEventListener('mousedown', () => {
  greenBlock.style.position = 'relative';
  buttonDownTimer = setInterval(() => {
    if (buttonUpTimer) clearInterval(buttonUpTimer);
    if (greenMove < (width - 150)) {
      greenBlock.style.left = `${greenMove += 10}px`;
    }
  }, 100);
});

//pink block listeners
pinkBlock.addEventListener('mousedown', () => {
  pinkBlock.style.position = 'relative';
  buttonDownTimer = setInterval(() => {
    if (buttonUpTimer) clearInterval(buttonUpTimer);
    if (pinkMove < (width - 150)) {
      pinkBlock.style.left = `${pinkMove += 10}px`;
    }
  }, 100);
});

//gray block listeners 
grayBlock.addEventListener('mousedown', () => {
  grayBlock.style.position = 'relative';
  buttonDownTimer = setInterval(() => {
    if (buttonUpTimer) clearInterval(buttonUpTimer);
    if (grayMove < (width - 150)) {
      grayBlock.style.left = `${grayMove += 10}px`;
    }
  }, 100);
});