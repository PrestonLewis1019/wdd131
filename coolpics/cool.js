
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);


function openModal(e) {
    
console.log(e.target);
const ing = e.target;
const src = ing.getAttribute('src');
const alt = ing.getAttribute('alt');
const full = src.replace('sm', 'full');
modalImage.setAttribute('src', full);
modalImage.setAttribute('alt', alt);
modal.showModal();
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');


menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() { 
nav.classList.toggle('hide');
menuBtn.classList.toggle('change');
}