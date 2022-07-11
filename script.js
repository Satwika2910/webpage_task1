const toggleBtn = document.getElementsByClassName("toggle-btn")[0]
const navEle = document.getElementsByClassName("nav-ele")[0]
toggleBtn.addEventListener('click', () => {
    navEle.classList.toggle('active')
})