/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')


// SHOW
toggleMenu.addEventListener('click', ()=> {
    navMenu.classList.toggle('show')
})

// HIDDEN
closeMenu.addEventListener('click', ()=> {
    navMenu.classList.remove('show')
})

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if (((window.innerHeight + window.scrollY) >= document.body.offsetHeight)) { //Page scrolled down till the very bottom
            if (sectionId == "contact") {
                document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.add('active')
            } else {
                document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.remove('active')
            }
        } else {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.add('active')
            } else {
                document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.remove('active')
            }
        }
    })
}

/*===== EXPAND WORK EXPERIENCE =====*/
const showMoreButton = document.getElementById('show-more')

showMoreButton.addEventListener('click', ()=> {
    removeClass('.experience__content','experience__content-hidden')
    showMoreButton.classList.toggle('experience__content-hidden')
})

function removeClass(selector, klass) {
    var elems = document.querySelectorAll(selector);
    elems.forEach(elem => elem.classList.remove(klass))
}
 