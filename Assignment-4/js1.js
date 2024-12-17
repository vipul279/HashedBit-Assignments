
function swapTheme() {
    const buttonclass=document.getElementById('swap');
    const divclass=document.getElementById('app');
            
    buttonclass.classList.toggle('button_night');
    divclass.classList.toggle('night');
}
