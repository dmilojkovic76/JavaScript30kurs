/**
 * Created by d00mil on 20.3.2017.
 */
    const video = document.querySelector('.player');
    const canvas = document.querySelector('.photo');
    const ctx = canvas.getContext('2d');
    const strip = document.querySelector('.strip');
    const snap = document.querySelector('.snap');

    function getVideo() {
        navigator.mediaDevices.getUserMedia({video: true, audio: false})
            .then(localMediaStream => {
                video.src = window.URL.createObjectURL(localMediaStream);
                video.play();
            })
            .catch(err => {
                console.error(err);
            });
    }

    function paintToCanvas() {
        const vWidth = video.videoWidth;
        const vHeight = video.videoHeight;
        canvas.width = vWidth;
        canvas.height = vHeight;

        return setInterval(() => {
            ctx.drawImage(video, 0, 0, vWidth, vHeight);
            let pixels = ctx.getImageData(0, 0, vWidth, vHeight);
            // pixels = redEffect(pixels);
            // pixels = rgbSplit(pixels);
            // ghosting(0.1);
            pixels = greenScreen(pixels);
            ctx.putImageData(pixels, 0, 0);
        },16);
    }

    function takePhoto(){
        snap.currentTime = 0;
        snap.play();

        const imgData = canvas.toDataURL("image/jpeg");
        const link = document.createElement("a");
        link.href = imgData;
        link.setAttribute("download", "snapshot");
        link.innerHTML = `<img src="${imgData}" alt="Snapshot from a webcam" />`;
        strip.insertBefore(link,strip.firstChild);
    }

    function redEffect(pixels){
        for (let i=0; i < pixels.data.length; i+=4){
            pixels.data[i] = pixels.data[i] + 100; // r
            pixels.data[i + 1] = pixels.data[i + 1] - 50; // g
            pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // b
        }
        return pixels;
    }

    function rgbSplit(pixels){
        for (let i=0; i < pixels.data.length; i+=4){
            pixels.data[i - 150] = pixels.data[i]; // r
            pixels.data[i + 100] = pixels.data[i + 1]; // g
            pixels.data[i - 150] = pixels.data[i + 2]; // b
        }
        return pixels;
    }

    function ghosting(amount){
        ctx.globalAlpha = amount;
    }

    function greenScreen(pixels){
        const levels = {};

        document.querySelectorAll(".rgb input").forEach((input) => {
            levels[input.name] = input.value;
        });

        for(let i = 0; i < pixels.data.length; i += 4){
            red = pixels.data[i];
            green = pixels.data[i + 1];
            blue = pixels.data[i + 2];
            alpha = pixels.data[i + 3];
            if(red >= levels.rmin && green >= levels.gmin && blue >= levels.bmin && red <= levels.rmax && green <= levels.gmax && blue <= levels.bmax){
                pixels.data[i + 3] = 0;
            };
        }
        return pixels;
    }

    getVideo();

    video.addEventListener("canplay", paintToCanvas);