const display = document.querySelector(".completeReviews")

let numVisits = Number(localStorage.getItem("numVisits")) || 0;

numVisits++

display.textContent = `Reviews completed: ${numVisits}`
localStorage.setItem("numVisits", numVisits)