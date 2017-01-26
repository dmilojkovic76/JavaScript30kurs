(function(global) {
    'use strict';

    const player = document.querySelector('.player');
    const video = player.querySelector('.viewer');
    const progress = player.querySelector('.progress');
    const progressBar = player.querySelector('.progress__filled');
    const toggle = player.querySelector('.toggle');
    const skipButtons = player.querySelectorAll('[data-skip]');
    const ranges = player.querySelectorAll('.player__slider');
    const fullScreen = player.querySelector('.full__screen');

    let updateRanges = false;
    let updateProgressBar = false;

    function togglePlay() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }

    function updateButton() {
        const icon = this.paused ? '►' : '❚❚';
        toggle.textContent = icon;
    }

    function skip() {
        video.currentTime += parseFloat(this.dataset.skip);
    }

    function handleRangeUpdate() {
        if (!updateRanges) {
            return;
        }

        video[this.name] = this.value;
    }

    function handleProgress() {
        const percent = (video.currentTime / video.duration) * 100;
        progressBar.style.flexBasis = `${percent}%`;
    }

    function scrub(e) {
        const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
        video.currentTime = scrubTime;
    }

    function handleFullScreen() {
        // TODO ...
        // Treba resiti vizuelni prikaz u full screen-u
        if (!document.mozFullScreen && !document.webkitFullScreen) {
            if (video.mozRequestFullScreen) {
                video.mozRequestFullScreen();
            } else {
                video.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else {
                document.webkitCancelFullScreen();
            }
        }
    }

    video.addEventListener('click', togglePlay);
    video.addEventListener('play', updateButton);
    video.addEventListener('pause', updateButton);
    video.addEventListener('timeupdate', handleProgress);

    toggle.addEventListener('click', togglePlay);

    skipButtons.forEach(button => button.addEventListener('click', skip));

    ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
    ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
    ranges.forEach(range => range.addEventListener('mousedown', () => { updateRanges = true; }));
    ranges.forEach(range => range.addEventListener('mouseup', () => { updateRanges = false; }));

    progress.addEventListener('click', scrub);
    // inline funkcija koja na svaki 'mousemove' event evaluira 'updateProgressBar'
    // i ako je 'true' poziva 'scrub' f-ju sa eventom 'e' koji joj je prosledjen.
    progress.addEventListener('mousemove', (e) => updateProgressBar && scrub(e));
    progress.addEventListener('mousedown', () => { updateProgressBar = true; });
    progress.addEventListener('mouseup', () => { updateProgressBar = false; });

    fullScreen.addEventListener('click', handleFullScreen);

})();
