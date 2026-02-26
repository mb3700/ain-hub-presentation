import './style.css'

// Scroll reveal animation
const revealElements = document.querySelectorAll('.reveal')
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
      revealObserver.unobserve(entry.target)
    }
  })
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })

revealElements.forEach(el => revealObserver.observe(el))

// Revenue bar animation
const revBars = document.querySelectorAll('.rev-fill')
const revObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const h = entry.target.dataset.height
      entry.target.style.setProperty('--h', h)
      entry.target.classList.add('animated')
      revObserver.unobserve(entry.target)
    }
  })
}, { threshold: 0.3 })

revBars.forEach(el => revObserver.observe(el))

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]')
const navLinks = document.querySelectorAll('.nav-link')

function updateActiveNav() {
  const scrollPos = window.scrollY + 100
  sections.forEach(section => {
    const top = section.offsetTop
    const height = section.offsetHeight
    const id = section.getAttribute('id')
    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach(link => {
        link.classList.remove('active')
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active')
        }
      })
    }
  })
}

window.addEventListener('scroll', updateActiveNav, { passive: true })
updateActiveNav()

// Navbar background on scroll
const navbar = document.getElementById('navbar')
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(10, 15, 30, 0.98)'
  } else {
    navbar.style.background = 'rgba(10, 15, 30, 0.95)'
  }
}, { passive: true })
