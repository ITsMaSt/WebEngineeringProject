alert("Hello World!");

const canvas = document.getElementById("spriteCanvas");
const ctx = canvas.getContext("2d");

const sprite = new Image();
sprite.src = "Rickrolled.png"; // Replace with your image path
sprite
const totalFrames = 32;
const frameWidth = 498;
const frameHeight = 427;

let currentFrame = 0;
const fps = 24;
const frameDuration = 1000 / fps;

sprite.onload = () => {
    setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(
            sprite,
            currentFrame * frameWidth,  // Source X
            0,                          // Source Y
            frameWidth,                 // Source Width
            frameHeight,                // Source Height
            0,                          // Canvas X
            0,                          // Canvas Y
            frameWidth,                 // Canvas Width
            frameHeight                 // Canvas Height
        );

        currentFrame = (currentFrame + 1) % totalFrames;
    }, frameDuration);
};

    document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("myAudio");

    const playAudio = () => {
        audio.play().catch((e) => {
            console.warn("Autoplay prevented:", e);
        });
    }
        document.addEventListener("click", playAudio); });
