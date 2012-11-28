function changePage(page) {
    window.location.href = 'http://' + document.domain + '/index.php?page=' + page;
}

function getCurrentPage() {
    var loc = window.location.href;
    var re = /page=(?:[a-zA-Z0-9]+)/;

    if (!re.test(loc)) {
        throw new PageNotFoundException;
    }

    return re.exec(loc).toString().split("=")[1];
}

function stringToTime(str) {
    var time  = 0;
    var parts = str.split(' ');

    for (var i = parts.length - 1; i >= 0; i--) {
        if (parts[i].substring(parts[i].length - 1) == 's') {
            time += parseInt(parts[i].substring(0, parts[i].length - 1));
        } else if (parts[i].substring(parts[i].length - 1) == 'm') {
            time += 60 * parseInt(parts[i].substring(0, parts[i].length - 1));
        } else if (parts[i].substring(parts[i].length - 1) == 'h') {
            time += 3600 * parseInt(parts[i].substring(0, parts[i].length - 1));
        } else if (parts[i].substring(parts[i].length - 1) == 'd') {
            time += 86400 * parseInt(parts[i].substring(0, parts[i].length - 1));
        }
    };

    return time;
}

function getTimeUntilBuilt() {
    return stringToTime($('#timeLink span').text());
}
