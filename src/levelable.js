this.getLevel = function () {
    return parseInt($('.' + className + ' .level').text().replace($('.' + className + ' .textlabel').text(), ""));
};
