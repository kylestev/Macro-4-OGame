/**
 * planets.js
 * Controls interactions with planets
 */

function Planets() {
    /**
     * Returns an array of planets for the current user
     */
    this.getPlanets = function () {
        /* TODO: implement */
        return [];
    };

    /**
     * Returns the currently selected planet
     */
    this.getCurrent = function () {
        planets = this.getPlanets();

        if (planets.length > 0) {
            return planets[0];
        }

        return null;
    };

    /**
     * Returns the home planet
     */
    this.getMain = function () {
        planets = this.getPlanets();

        if (planets.length > 0) {
            return planets[0];
        }

        return null;
    };
}

constants.universe.planets = new Planets();
