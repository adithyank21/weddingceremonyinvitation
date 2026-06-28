const entrance = document.getElementById("entrance");
const openButton = document.getElementById("openInvitationBtn");
const musicToggle = document.getElementById("musicToggle");
const backgroundMusic = document.getElementById("backgroundMusic");
const addToCalendarButton = document.getElementById("addToCalendar");

if (openButton) {
  openButton.addEventListener("click", () => {
    entrance.classList.add("is-open");
    document.body.classList.add("scroll-ready");
  });
}

const updateMusicButton = () => {
  if (!musicToggle) return;
  if (backgroundMusic && !backgroundMusic.paused) {
    musicToggle.classList.add("is-playing");
    musicToggle.querySelector(".music-label").textContent = "Pause music";
  } else {
    musicToggle.classList.remove("is-playing");
    musicToggle.querySelector(".music-label").textContent = "Play music";
  }
};

if (musicToggle) {
  musicToggle.addEventListener("click", async () => {
    if (!backgroundMusic) return;

    if (backgroundMusic.paused) {
      try {
        await backgroundMusic.play();
      } catch (error) {
        console.warn("Audio playback was blocked:", error);
      }
    } else {
      backgroundMusic.pause();
    }

    updateMusicButton();
  });
}

if (backgroundMusic) {
  backgroundMusic.addEventListener("play", updateMusicButton);
  backgroundMusic.addEventListener("pause", updateMusicButton);
  backgroundMusic.addEventListener("ended", updateMusicButton);
}

const revealItems = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.18,
  }
);

revealItems.forEach((item) => observer.observe(item));

const targetDate = new Date("2026-08-22T11:00:00");
const updateCountdown = () => {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
};

updateCountdown();
setInterval(updateCountdown, 1000);

if (addToCalendarButton) {
  addToCalendarButton.addEventListener("click", () => {
    const title = "Adithya N K & Akshay M Wedding Ceremony";
    const details = "Join us for the wedding ceremony and reception celebration.";
    const location = "Meenkulam Sreekrishna Temple, Olayambadi, Kannur";
    const start = "20260822T110000";
    const end = "20260822T130000";

    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${start}/${end}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  });
}

updateMusicButton();
