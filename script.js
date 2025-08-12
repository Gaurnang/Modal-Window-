const showModal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const closeModalbtn = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

const openModal = () => {
   modal.classList.remove('hidden');
   overlay.classList.remove('hidden');
}
const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
for(let i = 0 ; i < showModal.length; ++i) {
    showModal[i].addEventListener("click", openModal);
}

closeModalbtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
    if(e.key === 'Escape' && !modal.classList.contains('hidden'))  closeModal();
});


