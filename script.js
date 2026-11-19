// AGROPREINTE SCIENTIFIC CLUB — interactions

// ===== MODIFIER ICI : LIEN DU PODCAST =====
// Remplacez l'identifiant de démonstration par l'identifiant de votre vidéo YouTube.
// Exemple : pour https://www.youtube.com/watch?v=ABC123, utilisez "ABC123".
const PODCAST_VIDEO_URL = "ScMzIvxBSi4";

const podcastFrame = document.getElementById("podcastFrame");
if (podcastFrame && PODCAST_VIDEO_URL) {
  podcastFrame.src = "https://www.youtube-nocookie.com/embed/" + PODCAST_VIDEO_URL;
}

// Menu mobile
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", function () {
    const isOpen = navigation.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  navigation.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navigation.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}
