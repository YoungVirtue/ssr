// Get DOM Elements
const nav = document.querySelector('nav');
const navLinks = nav.querySelectorAll('a');
const sections = document.querySelectorAll('section');

// Smooth Scrolling
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');
    const target = document.querySelector(href);
    const topOffset = nav.offsetHeight;
    const targetPosition = target.offsetTop - topOffset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

// Add event listener to the button
document.getElementById("button-53").addEventListener("click", function() {
    // Smooth scroll to the contact section
    document.querySelector('#contact').scrollIntoView({
      behavior: 'smooth'
    });
  });

// Highlight Active Section
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  sections.forEach(section => {
    const sectionTop = section.offsetTop - nav.offsetHeight;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
});
