//#region dropdown list

const dropdownHead = document.querySelector(".dropdown__select-head")
const dropdownItems = [...document.querySelectorAll(".dropdown__select-item")]

const dropdownItemGroup = document.querySelector(".dropdown__select-groupitem")

dropdownHead.onclick = () => {
    console.log(1)
    dropdownItemGroup.classList.toggle("active")
    dropdownHead.classList.toggle("no__bottom-border-radius")
}


dropdownItems.forEach((item) => {
    item.onclick = () => changeHead(item)
})


function changeHead(item) {
    let current = dropdownHead.children[0].innerHTML
    dropdownHead.children[0].innerHTML = item.children[0].innerHTML
    item.children[0].innerHTML = current
}