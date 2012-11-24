function BasicManager(name, page) {
    this.name = name;
    this.page = page;
    this.entity_list = [];

    this.addEntity = function (name, type, className) {
        var exists = false;

        for (var i = this.entity_list.length - 1; i >= 0; i--) {
            if (this.entity_list[i].named == name) {
                exists = true;
                
                break;
            }
        };

        if (!exists) {
            this.entity_list.push({
                _name: name,
                _type: type,
                _class: className
            });
        }
    };

    this.getEntity = function (name, type) {
        for (var i = this.entity_list.length - 1; i >= 0; i--) {
            if (this.entity_list[i]._type == type && this.entity_list[i]._name == name) {
                return {
                    _name: this.entity_list[i]._name,
                    _level: this.getLevel(this.entity_list[i]._class),
                    _class: this.entity_list[i]._class
                };
            }
        };

        return {
            _name: '',
            _level: -1,
            _class: ''
        };
    };
}
