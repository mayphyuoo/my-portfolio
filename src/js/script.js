//-------- dark theme
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun'

//-------- previously selected theme
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

//-------- current theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme)?'dark':'light';
const getCurrentIcon = () => document.body.classList.contains(iconTheme)?'uil-moon':'uil-sun';

//-------- if theme is changed
if (selectedTheme){
    document.body.classList[selectedTheme === 'dark'?'add': 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'uil-moon'?'add': 'remove'](iconTheme);
}

// Activate/deactivate theme with the button
themeButton.addEventListener('click', () => {
    // add or remove dark/light icon
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    // save current theme in local storage
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})

// -------- hide/show menu
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle) {
    navToggle.addEventListener('click', () => {
       navMenu.classList.add('show-menu');
    });
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

// -------- remove menu profile
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
    console.log("remove menu");
}

navLink.forEach(n => n.addEventListener('click', linkAction));


// -------- typewriter effect

new Typewriter('#typewriter', {
  strings: ['May Phyu Oo', 'Web Developer', 'Astronomy Enthusiast', 'Javascript Developer'],
  autoStart: true,
  loop: true,
  cursor: "|"
});

// -------- Portfolio Swiper

var swiper = new Swiper(".blog-slider", {
    spaceBetween: 30,
    effect: 'fade',
    // loop: true,
    mousewheel:{
        invert: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".blog-slider__pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });
  