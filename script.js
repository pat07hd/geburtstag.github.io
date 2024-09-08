(function() {
    const confettiCanvas = document.getElementById('confettiCanvas');
    const ctx = confettiCanvas.getContext('2d');
    const confettiCount = 300;
    const confettiColors = ['#FFD700', '#000000', '#FFFFFF', '#FFA500', '#FF4500'];
    let confettiElements = [];

    function resizeCanvas() {
        confettiCanvas.width = window.innerWidth;
        confettiCanvas.height = window.innerHeight;
    }

    function createConfetti() {
        confettiElements = [];
        for (let i = 0; i < confettiCount; i++) {
            confettiElements.push({
                x: Math.random() * confettiCanvas.width,
                y: Math.random() * confettiCanvas.height,
                r: Math.random() * 6 + 2,
                color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
                tilt: Math.random() * 10 - 5,
                speed: Math.random() * 3 + 2
            });
        }
    }

    function drawConfetti() {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        confettiElements.forEach(confetti => {
            ctx.beginPath();
            ctx.arc(confetti.x, confetti.y, confetti.r, 0, 2 * Math.PI, false);
            ctx.fillStyle = confetti.color;
            ctx.fill();
            confetti.y += confetti.speed;
            confetti.x += confetti.tilt;
            if (confetti.y > confettiCanvas.height) {
                confetti.y = 0;
                confetti.x = Math.random() * confettiCanvas.width;
            }
            if (confetti.x > confettiCanvas.width || confetti.x < 0) {
                confetti.x = Math.random() * confettiCanvas.width;
                confetti.y = 0;
            }
        });
        requestAnimationFrame(drawConfetti);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        alert('Vielen Dank für deine Antwort! Deine Teilnahme wird an patrick.konietzko@t-online.de gesendet.');
        document.getElementById('rsvpForm').submit(); // Formulardaten senden
    }

    window.addEventListener('resize', resizeCanvas);
    document.getElementById('rsvpForm').addEventListener('submit', handleFormSubmit);

    resizeCanvas();
    createConfetti();
    drawConfetti();
})();
