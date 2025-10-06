const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector("#open-modal");
const btnCloseModal = document.querySelector(".close-button");
const body = document.querySelector("body");
const modalContent = document.querySelector(".modal-content");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
  body.style.overflow = "hidden";
})

btnCloseModal.addEventListener("click", () => {
  modal.style.display = "none";
  body.style.overflow = "auto";
  
});


modal.addEventListener("click", (event) => {
    // Close modal only if clicked outside modal-content
    if (event.target === modal) {
        modal.style.display = "none";
        body.style.overflow = "auto";
    }
});
