import anime from './lib/anime.esm.js';

// Floating heart animation
const floatingHeartAnimation = () => {
    anime({
        targets: '.floating-heart',
        translateY: [-10, 10],
        scale: [1, 1.1],
        rotate: [-5, 5],
        duration: 3000,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutQuad'
    });
};

// Title text animation
const titleAnimation = () => {
    anime({
        targets: '.title',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1200,
        easing: 'easeOutExpo',
        delay: 300
    });
};

// Subtitle animation
const subtitleAnimation = () => {
    anime({
        targets: '.subtitle',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 1200,
        easing: 'easeOutExpo',
        delay: 500
    });
};

// Input container animation
const inputContainerAnimation = () => {
    anime({
        targets: '.input-container',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 700
    });
};

// Quick actions animation
const quickActionsAnimation = () => {
    anime({
        targets: '.action-btn',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        delay: anime.stagger(100, {start: 900}),
        easing: 'easeOutExpo'
    });
};

// Steps animation
const stepsAnimation = () => {
    anime({
        targets: '.step',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1000,
        delay: anime.stagger(200),
        easing: 'easeOutExpo'
    });
};

// Button hover animation
const initializeButtonAnimations = () => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            anime({
                targets: button,
                scale: 1.05,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
        
        button.addEventListener('mouseleave', () => {
            anime({
                targets: button,
                scale: 1,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
    });
};

// Initialize all animations
document.addEventListener('DOMContentLoaded', () => {
    floatingHeartAnimation();
    titleAnimation();
    subtitleAnimation();
    inputContainerAnimation();
    quickActionsAnimation();
    stepsAnimation();
    initializeButtonAnimations();
}); 