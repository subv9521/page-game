
const getSideBarPc = document.querySelector('.side-bar');
const getContent = document.querySelector('.content');
const getApp = document.querySelector('.app__container');



function openSideBar() {
    getSideBarPc.classList.toggle('d-none')
    getContent.classList.toggle('hide-content')
    getApp.classList.toggle('app__container--change')
}

const menuGame = document.querySelector('.side-bar-game')
menuGame.addEventListener('click', () => {
    document.querySelector('.side-bar__sub-list').classList.toggle('d-none')
})

const getMenuUser = document.querySelector('.header__user-mobile');
function openMenuUser() {
    getMenuUser.classList.toggle('d-none')
}


const getRecommended = document.querySelector('.recommended')
const getTrendGame = document.querySelector('.trending-game')

function changeNavContent(navItem, element) {
    const getActiveNav = document.querySelector('.nav-content-item.active-nav-content');
    getActiveNav.classList.remove('active-nav-content');
    element.classList.add('active-nav-content');
    getRecommended.classList.remove('d-none');
    getTrendGame.classList.remove('d-none');

    if (navItem == 'recommended') {
        getTrendGame.classList.add('d-none')
    } else if (navItem == 'trending games') {
        getRecommended.classList.add('d-none')
    } else {
        getTrendGame.classList.add('d-none')
        getRecommended.classList.add('d-none')
    }
}


$('.run-slide-game').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1200:{
            items:3
        }
    }
})

$('.run-week-trending__slide').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
        1200:{
            items:4
        }
    }
})










