const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.5;

//set first img opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e){

    //reset opacity on next click
    imgs.forEach(img => img.style.opacity = 1);

    //change source of current image to clicked imaged
    current.src = e.target.src;

    //add css fadeIn animation
    current.classList.add('fade-in');

    //remove fadeIn class after click
    setTimeout(() => current.classList.remove('fade-in'), 500);

    //change opacity on click
    e.target.style.opacity = opacity
}
