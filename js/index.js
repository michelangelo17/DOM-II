// Your code goes here
const navbar = document.querySelector('.main-navigation');
const navLinks = document.querySelectorAll('nav a');
const body = document.querySelector('body');
const home = document.querySelector('.home');
const buttons = document.querySelectorAll('.btn');
const text = document.querySelectorAll('p');


navbar.addEventListener('wheel', () => navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.color = 'blue';
    link.addEventListener('mouseleave', () => link.style.color = 'grey');
});
}));
navLinks.forEach(link => link.addEventListener('click', e = e.preventDefault));

body.addEventListener('dblclick', () => {
  body.style.backgroundColor = "#FFEBCD";
  home.addEventListener('auxclick', (e) => {
    body.style.backgroundColor = '#FFFFFF';
    e.stopPropagation();
  })
});

text.forEach(p => p.addEventListener('mouseover', () => {
  p.style.fontSize = '1.8rem';
  p.addEventListener('mouseout', () => p.style.fontSize = '1.6rem');
}));

buttons.forEach(button => button.addEventListener('mousedown', () => {
  button.style.backgroundColor = 'green';
  button.addEventListener('mouseup', () => button.style.backgroundColor = '#17A2B8')
}));