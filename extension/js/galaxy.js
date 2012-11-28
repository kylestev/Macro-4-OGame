function getPlanets() {
    var planets = [];
    var galaxy = parseInt($('#galaxy_input').val());
    var system = parseInt($('#system_input').val());

    $('.position').parent().each(function(row) {
        var tooltip = null;
        var planet = {
            galaxy: galaxy,
            system: system,
            position: -1,
            id: -1,
            name: '',
            hasMoon: false,
            moon: {
                id: -1,
                name: '',
                size: -1
            },
            uninhabited: false,
            hasDebrisField: false,
            debrisField: {
                metal: 0,
                crystal: 0
            },
            player: {
                id: -1,
                name: '',
                flags: {
                    inactive: false,
                    longInactive: false,
                    strong: false,
                    vacationMode: false
                },
                rank: -1,
                inAlliance: false,
                alliance: {
                    id: -1,
                    name: '',
                    rank: -1,
                    members: 0
                }
            }
        };

        planet.position = parseInt($(this).find('.position').text());

        if ($('.microplanet img', this).length == 0) {
            planet.uninhabited = true;
            planets.push(planet);

            return;
        }

        planet.name = $(this).find('.planetname').text().trim();


        planet.hasMoon = $(this).find('.moon[data-moon-id]').length == 1;

        if (planet.hasMoon) {
            tooltip = getTooltipForElement($(this).find('.moon > a'));

            planet.moon.id   = $(this).find('.moon[data-moon-id]').attr('data-moon-id');
            planet.moon.name = tooltip.find('h1 > span').text().trim();
            planet.moon.size = parseInt(tooltip.find('#moonsize').text().trim());
        }

        tooltip = getTooltipForElement($(this).find('.playername > a'));

        planet.player.id         = parseInt(tooltip.find('.rank > a').text().trim());
        planet.player.name       = $(this).find('.playername > a > span').text().trim();

        planet.hasDebrisField    = $(this).find('.debris > a').length == 1;

        if (planet.hasDebrisField) {
            var debris  = getTooltipForElement($(this).find('.debris > a')).find('.debris-content');

            planet.debrisField.metal   = parseInt($(debris[0]).text().trim().substring(7).replace(/\./g, ""));
            planet.debrisField.crystal = parseInt($(debris[1]).text().trim().substring(9).replace(/\./g, ""));
        }

        planet.player.inAlliance = $(this).find('.allytag > span').length == 1;

        if (planet.player.inAlliance) {
            tooltip = getTooltipForElement($(this).find('.allytag > span'));

            planet.player.alliance.id      = parseInt(tooltip.find('.ListLinks > li:nth-child(3) > a').attr('href').substring(28));
            planet.player.alliance.name    = tooltip.find('h1').text().trim();
            planet.player.alliance.rank    = parseInt(tooltip.find('.rank > a').text().trim());
            planet.player.alliance.members = parseInt(tooltip.find('.members').text().trim().replace("Member: "));
        }

        planet.player.flags.inactive     = $(this).find('.playername.inactive').length == 1;
        planet.player.flags.longInactive = $(this).find('.playername.longinactive').length == 1;
        planet.player.flags.strong       = $(this).find('.playername.strong').length == 1;
        planet.player.flags.vacationMode = $(this).find('.playername.vacation').length == 1;

        planets.push(planet);
    });

    return planets;
}

function getTooltipForElement(el) {
    return $('#' + el.attr('rel'));
}

var planets = getPlanets();
