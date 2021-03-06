

var opts = {
    lines: 11, // The number of lines to draw
    length: 26, // The length of each line
    width: 14, // The line thickness
    radius: 33, // The radius of the inner circle
    corners: 0.5, // Corner roundness (0..1)
    rotate: 60, // The rotation offset
    direction: 1, // 1: clockwise, -1: counterclockwise
    color: '#000', // #rgb or #rrggbb or array of colors
    speed: 0.7, // Rounds per second
    trail: 59, // Afterglow percentage
    shadow: false, // Whether to render a shadow
    hwaccel: false, // Whether to use hardware acceleration
    className: 'spinner', // The CSS class to assign to the spinner
    zIndex: 2e9, // The z-index (defaults to 2000000000)
    top: 'auto', // Top position relative to parent in px
    left: 'auto' // Left position relative to parent in px
};
var target = document.getElementById('');
var spinner = new Spinner(opts).spin(target);