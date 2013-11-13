var flashReady = function () {
    $('#play-btn').click(function () {
        flash.connect('rtmp://localhost/SMSServer');
    });
};

var connected = function (success, error) {
    flash.startPlaying('hobbit_vp6.flv');
};


