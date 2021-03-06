(function () {
    var ipcRenderer = require('electron').ipcRenderer;

    ipcRenderer.on('playPause', function () {
        var video = document.querySelector('video');

        if (typeof video === 'undefined' || video === null) {
            return;
        }

        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }

    });

    ipcRenderer.on('pause', function () {
        var video = document.querySelector('video');

        if (typeof video === 'undefined' || video === null) {
            return;
        }

        if (!video.paused) {
            video.pause();
        }

    });

    ipcRenderer.on('changeTime', function (event, time) {
        var video = document.querySelector('video');

        if (typeof video === 'undefined' || video === null) {
            return;
        }

        video.currentTime += time;

    });

}());
