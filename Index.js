const targetDate = new Date("2025-06-25T15:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML = "It's time!";
    clearInterval(interval);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").querySelector(".time-value").innerHTML = `${days}`;
  document.getElementById("hours").querySelector(".time-value").innerHTML = `${hours}`;
  document.getElementById("minutes").querySelector(".time-value").innerHTML = `${minutes}`;
  document.getElementById("seconds").querySelector(".time-value").innerHTML = `${seconds}`;
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();
