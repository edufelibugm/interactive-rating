const mainContainer = document.querySelector(".main-container")
const thankContainer = document.querySelector(".thank-you")
const submit = document.getElementById("submit")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")

submit.addEventListener('click', () => {
    thankContainer.classList.remove("hidden")
    mainContainer.classList.add("hidden")
    rating.textContent(rate)
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})