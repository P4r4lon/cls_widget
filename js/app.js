const openModals = [...document.querySelectorAll(".plus__button")]
const closeModals = [...document.querySelectorAll(".close__cross")]

const infoModal = document.getElementById("infoModal")
const guideModal = document.getElementById("guideModal")


const overlay = document.querySelector(".overlay")

let activeModal = null;


const modals = {
    info: infoModal,
    guide: guideModal
}

openModals.forEach((item) => {
    const currentModal = modals[item.dataset['modal']]
    item.onclick = () => fadeInModal(currentModal)
})

closeModals.forEach((item) => {
    const currentModal = modals[item.dataset['modal']]
    item.onclick = () => fadeOutModal(currentModal)
})

overlay.onclick = () => fadeOutModal(activeModal)

function fadeInModal(modal) {
    activeModal = modal;
    modal.style.display = "flex";
    overlay.style.display = "block"
    setTimeout(() => {
        overlay.style.opacity = 1;
        modal.style.opacity = 1;
    }, 0)
}

function fadeOutModal(modal) {
    modal.style.opacity = 0;
    overlay.style.opacity = 0;
    setTimeout(() => {
        modal.style.display = "none";
        overlay.style.display = "none"
    }, 500)
}