const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const displayDate = document.querySelector(".date");

function updateClock() {
    const date = new Date();

    const hrs = String(date.getHours()).padStart(2, "0");
    const mins = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");

    hours.textContent = hrs;
    minutes.textContent = mins;
    seconds.textContent = sec;
    displayDate.textContent = date.toDateString();
}

updateClock();
setInterval(updateClock, 1000);
