const blocks = document.querySelectorAll('.block');

blocks.forEach((block, i) => {
  block.addEventListener('click', () => {
  block.style.order = 0;
  blocks.forEach(block => block.style.order++);
})});

// blocks.forEach(block => {
//   block.addEventListener('mousedown', (e) => {
//     block.style.position = 'relative';
//     block.style.right = 0;
//     while (e) {
//       block.style.right++;
//     }
//   })
// })

let buttonDownTimer;

blocks.forEach(block => {
  let move = 0;
  block.style.position = 'relative';
  block.addEventListener('mousedown', () => {
    buttonDownTimer = setInterval(() => {
      block.style.left = `${move += 10}px`;
    }, 100);
  })
});

document.addEventListener("mouseup", function(){
    if (buttonDownTimer) clearInterval(buttonDownTimer);
});

