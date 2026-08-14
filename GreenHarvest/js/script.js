function updateDateTime() {
const dateTime = document.getElementById("dateTime");

if (dateTime) {
const now = new Date();
dateTime.textContent = now.toLocaleString();
}
}

updateDateTime();
setInterval(updateDateTime, 1000);