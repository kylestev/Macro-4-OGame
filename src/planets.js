function Planets() {
    this.getPlanets = function () {
        return [];
    };

    this.getCurrent = function () {
        planets = this.getPlanets();

        if (planets.length > 0) {
            return planets[0];
        }

        return null;
    };

    this.getMain = function () {
        planets = this.getPlanets();

        if (planets.length > 0) {
            return planets[0];
        }

        return null;
    };
}

constants.universe.planets = new Planets();
