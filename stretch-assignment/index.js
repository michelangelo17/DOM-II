const blocks = document.querySelectorAll('.block');
const width = window.innerWidth;
let buttonDownTimer;
let buttonUpTimer;
let moveBack = 0;
let target;

blocks.forEach((block, i) => {
  block.style.order = `${++i}`
  block.style.transition = 'order .5s linear'
  block.addEventListener('click', () => {
    block.style.order = 0;
    blocks.forEach(block => block.style.order++);
  })
});

blocks.forEach(block => {
  block.addEventListener('mousedown', moveRight)
});

function moveRight() {
  target = this;
  move = 0;
  if (moveBack <= 0) {
    move = 0;
  } else {
    move = moveBack;
  }

  this.style.position = 'relative';
  buttonDownTimer = setInterval(() => {
    if (buttonUpTimer) clearInterval(buttonUpTimer);
    if (move < (width - 150)) {
      this.style.left = `${move += 10}px`;
      moveBack = move;
    }
  }, 100);
}

document.addEventListener('mouseup', () => {
  if (buttonDownTimer) {
    clearInterval(buttonDownTimer);
    buttonUpTimer = setInterval(() => {
      if (moveBack > 0) {
        target.style.left = `${moveBack -= 10}px`;
      }
    }, 100);
  }
})