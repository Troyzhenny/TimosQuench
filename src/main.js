import { createScene } from "./scripts/sceneSetup.js";

document.addEventListener('DOMContentLoaded', () => {
    createScene();

    const handleGoToBasket = () => {
        console.log("Basket button Clicked");
    }
    const basketButton = document.getElementById('basketButton');
    if(basketButton) {
        basketButton.addEventListener('click', handleGoToBasket);
    } else {
        console.log('Basket button not found!')
    }
});

const LeMenu = document.querySelector(".menu-wrapper");
const ham = document.getElementById("ham-menu");

if (LeMenu && ham) {
    // Function to apply the transformation to both elements
    const applyTransform = () => {
        LeMenu.style.color = `#ff6d09`;
        ham.style.transform = `rotateY(180deg)`;
    };

    // Function to reset the transformation on both elements
    const resetTransform = () => {
        LeMenu.style.color = `#171717`;
        LeMenu.style.transform = `rotateY(0deg)`;
        ham.style.transform = `rotateY(0deg)`;
    };

    // Apply effect when mouse enters either LeMenu or ham
    LeMenu.addEventListener('mouseover', applyTransform);
    ham.addEventListener('mouseover', applyTransform);

    // Reset effect when mouse leaves either LeMenu or ham
    LeMenu.addEventListener('mouseout', resetTransform);
    ham.addEventListener('mouseout', resetTransform);
} else {
    console.log('ham menu or menu wrapper is not available: is null');
}