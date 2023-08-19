var Win = function(title, x, y, w, h, source, settings) {
    if (typeof title != 'string') {
        title = 'Application';
    }

    x = x || 0;
    y = y || 0;
    w = w || 350;
    h = h || 350;

    if (typeof source != 'string') {
        source = 'blankwin.html';
    }

    let contentPane = document.createElement('div');

    if (typeof settings !=' object') {
        settings = {};
    }
}