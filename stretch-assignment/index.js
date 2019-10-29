const blocks = document.querySelectorAll('.block');
const width = window.innerWidth;
console.log(width);
blocks.forEach((block, i) => {
  block.style.order = `${++i}`
  block.style.transition = 'order .5s linear'
  block.addEventListener('click', () => {
  block.style.order = 0;
  blocks.forEach(block => block.style.order++);
})});

let buttonDownTimer;
let buttonUpTimer;
blocks.forEach(block => {
  let move = 0;
  block.style.position = 'relative';
  block.addEventListener('mousedown', () => {
    if (buttonUpTimer) clearInterval(buttonUpTimer);
    buttonDownTimer = setInterval(() => {
      if (move < (width - 150)) {
        block.style.left = `${move += 10}px`; 
      }
    }, 100);
  })
  document.addEventListener("mouseup", function(){
    if (buttonDownTimer) clearInterval(buttonDownTimer);
    buttonUpTimer = setInterval(() => {
      if (move > 0) {
        block.style.left = `${move -= 10}px`; 
      }
    }, 100);
});
});


