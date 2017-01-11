(function (global) {
    'use strict';
    const canvas = document.querySelector('#draw');
    const ctx = canvas.getContext('2d');

    let isDrawing = false;
    let drawX = 0;
    let drawY = 0;
    let hue = 0;
    let buildup = true;

    resizeCanvas();

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.strokeStyle = '#BADA55';
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.lineWidth = 5;
        ctx.strokeRect(0, 0, window.innerWidth, window.innerHeight);
        //ctx.globalCompositeOperation = 'source-over'; // default operation, others can be found at https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
    }

    function draw(e) {
        if (!isDrawing) {
            return; // Do not draw if mouse is not pressed
        }
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        ctx.beginPath();
        ctx.moveTo(drawX, drawY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        drawX = e.offsetX;
        drawY = e.offsetY;
        hue += 0.1;
        if (hue > 360) {
            hue = 0;
        }

        if (ctx.lineWidth >= 100) {
            buildup = false;
        }

        if (buildup) {
            ctx.lineWidth += 0.1;
        }
    }

    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        drawX = e.offsetX;
        drawY = e.offsetY;
        ctx.lineWidth = Math.floor((Math.random() * 100 + 1));
        hue = Math.floor((Math.random() * 360 + 1));
        draw(e);
    });
    canvas.addEventListener('mouseup', (e) => {
        isDrawing = false;
        if (ctx.lineWidth >= 100) {
            ctx.lineWidth = 1;
            buildup = true;
        }
    });
    canvas.addEventListener('mouseout', () => isDrawing = false);

    window.addEventListener('resize', resizeCanvas);
})();
