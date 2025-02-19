// Logo scroll animation
const logoContainer = document.querySelector('#header-mid-segment');
const logo = document.querySelector('#header-mid-segment a');
const maxScroll = 100; // The scroll distance over which the animation occurs

function handleScroll() {
    const currentScroll = window.scrollY;
    const scrollProgress = Math.min(currentScroll / maxScroll, 1);
    
    // Calculate logo size between large and small based on scroll progress
    const logoSize = 150 - (scrollProgress * (150 - 75)); // Transition from 150px to 75px
    
    // Only adjust the height of the container
    logoContainer.style.height = `${160 - (scrollProgress * (160 - 75))}px`; // Transition from 160px to 75px
    
    // Apply the calculated values to the logo
    logo.style.width = `${logoSize}px`;
    logo.style.height = `${logoSize}px`;
}

window.addEventListener('scroll', handleScroll);