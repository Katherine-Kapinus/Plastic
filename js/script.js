let currentFrame = 1;             // з якого кадру почати
const totalFrames = 16;           // скільки усього зображень
const img = document.getElementById("sweatshirt");

function showFrame(frame) {
    const frameNumber = String(frame).padStart(3, "0"); // 001, 002, ...
    img.src = `img/sweatshirt${frameNumber}.png`;
}

setInterval(() => {
    currentFrame++;
    if (currentFrame > totalFrames) {
      currentFrame = 1; // починаємо заново
    }
    showFrame(currentFrame);
  }, 100); // час між кадрами (100 мс ≈ 10 fps)