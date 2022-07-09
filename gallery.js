let leftMargin 

const firstImage = document.querySelector ('.first_image');
const leftbutton = document.querySelector ('#left_button');
const rightButton = document.querySelector('#right_button');
leftbutton.onclick = () => {
    leftMargin = leftMargin - 300;

    firstImage.style.leftMargin + 'px'
}