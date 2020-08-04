//Mobile Menu
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

//Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        //Reset Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        //Reset Menu State
        showMenu = false;
    }
}



//Modal Window
document.getElementById('updatebutton').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'grid';
});

document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'none';
});



//Custom File Upload
const customFile = document.getElementById("custom-file");
const customFileBtn = document.getElementById("custom-file-btn");
const customFileText = document.getElementById("custom-file-text");

customFileBtn.addEventListener('click', function(){
    customFile.click();
});

customFile.addEventListener('change', function() {
   if(customFile.value){
       customFileText.innerHTML = customFile.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
   } else {
    customFileText.innerHTML = "No image choosen, yet.";
   }
});








