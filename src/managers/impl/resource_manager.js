function ResourceManager() {
    var resources = {
        metal:      'resources_metal',
        crystal:    'resources_crystal',
        deuterium:  'resources_deuterium',
        darkMatter: 'resources_darkmatter',
        energy:     'resources_energy'
    };

    var velocities = {
        metal: function (level) {
            return Math.floor(constants.universe.speed * 30 * level * Math.pow(1.1, level));
        },
        crystal: function (level) {
            return Math.floor(constants.universe.speed * 20 * level * Math.pow(1.1, level));
        },
        deuterium: function (level, temp_avg) {
            return Math.floor(constants.universe.speed * (10 * level * Math.pow(1.1, level)) * (1.36 - 0.004 * temp_avg));
        }
    };

    var energyConsumptions = {
        metal: function (level) {
            return Math.ceil(10 * level * Math.pow(1.1, level));
        },
        crystal: function (level) {
            return Math.ceil(10 * level * Math.pow(1.1, level));
        },
        deuterium: function (level) {
            return Math.ceil(20 * level * Math.pow(1.1, level));
        }
    };

    this.getResourceAmount = function (name) {
        var className = this.resources[name];

        return parseInt($('#' + className).text().replace(".", ""));
    };

    this.getResourceAmounts = function () {
        var ress = {};

        for (var i in this.resources) {
            ress[i] = this.getResourceAmount(this.resources[i]);
        };

        return ress;
    };

    this.getResourceVelocity = function (name) {
        var className = this.resources[name];
        /* TODO: implement */
    };
}

constants.managers.resources = new ResourceManager();
