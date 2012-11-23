function Buildable () {
    this.buildEntity = function (name, type) {
        b = this.getEntity(name, type);

        $('.' + b._class + ' > div > a > img').parent().click();
    };
}
