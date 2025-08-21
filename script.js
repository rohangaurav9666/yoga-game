// Load the correct pose image based on query string
window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const pose = urlParams.get("pose");
  const poseImage = document.getElementById("poseImage");

  if (poseImage && pose) {
    poseImage.src = `poses/${pose}.png`;
    poseImage.alt = `${pose} pose`;
  }

  // Webcam setup
  const webcam = document.getElementById("webcam");
  if (webcam) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        webcam.srcObject = stream;
      })
      .catch(err => {
        console.error("Webcam not available:", err);
      });
  }

  // Fake scoring logic (placeholder for ML model / PoseNet)
  let score = 0;
  const scoreDisplay = document.getElementById("score");

  if (scoreDisplay) {
    setInterval(() => {
      score = Math.min(100, score + Math.floor(Math.random() * 10));
      scoreDisplay.textContent = score;
    }, 2000);
  }
});
