<<<<<<< HEAD
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slider =document.querySelector('.slider');

next.addEventListener('click', function(){
let slides = document.querySelectorAll('.slides');
slider.appendChild(slides[0]);
})

prev.addEventListener('click', function(){
let slides = document.querySelectorAll('.slides');
slider.prepend(slides[slides.length - 1]);
=======
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slider =document.querySelector('.slider');

next.addEventListener('click', function(){
let slides = document.querySelectorAll('.slides');
slider.appendChild(slides[0]);
})

prev.addEventListener('click', function(){
let slides = document.querySelectorAll('.slides');
slider.prepend(slides[slides.length - 1]);
>>>>>>> cf8c516e65ce4c1a9230916b3968100a73eaec65
})