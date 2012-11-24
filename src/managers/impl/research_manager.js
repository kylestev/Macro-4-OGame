function ResearchManager () {
    this.name = 'Research';
    this.page = 'research';
};

ResearchManager.inherits(BasicManager);
ResearchManager.swiss(Levelable, 'getLevel');
ResearchManagerImpl = new ResearchManager();

var res = [
    ['energy',       'tech',  'details113'],
    ['laser',        'tech',  'details120'],
    ['ion',          'tech',  'details121'],
    ['hyperspace',   'tech',  'details114'],
    ['plasma',       'tech',  'details122'],
    ['combustion',   'drive', 'details115'],
    ['impulse',      'drive', 'details115'],
    ['hyperspace',   'drive', 'details118'],
    ['espionage',    'tech',  'details106'],
    ['computer',     'tech',  'details108'],
    ['astrophysics', 'tech',  'details124'],
    ['irn',          'tech',  'details123'],
    ['graviton',     'tech',  'details199'],
    ['weapons',      'tech',  'details109'],
    ['shielding',    'tech',  'details110'],
    ['armor',        'tech',  'details111']
];

var doubled = function (base_cost, next_level) {
    return base_cost * Math.pow(2.0, next_level);
};

var costs = {
    drive: {
        combustion: {
            metal: 400,
            crystal: 0,
            deuterium: 600,
            cost: doubled
        },
        impulse: {
            metal: 2000,
            crystal: 4000,
            deuterium: 600,
            cost: doubled
        },
        hyperspace: {
            metal: 10000,
            crystal: 20000,
            deuterium: 6000,
            cost: doubled
        }
    },
    tech: {
        energy: {
            metal: 0,
            crystal: 800,
            deuterium: 400,
            energy: 0,
            cost: doubled
        },
        laser: {
            metal: 200,
            crystal: 100,
            deuterium: 0,
            energy: 0,
            cost: doubled
        },
        ion: {
            metal: 1000,
            crystal: 300,
            deuterium: 100,
            energy: 0,
            cost: doubled
        },
        hyperspace: {
            metal: 0,
            crystal: 4000,
            deuterium: 2000,
            energy: 0,
            cost: doubled
        },
        plasma: {
            metal: 2000,
            crystal: 4000,
            deuterium: 1000,
            energy: 0,
            cost: doubled
        },
        espionage: {
            metal: 200,
            crystal: 1000,
            deuterium: 200,
            energy: 0,
            cost: doubled
        },
        computer: {
            metal: 0,
            crystal: 400,
            deuterium: 600,
            energy: 0,
            cost: doubled
        },
        astrophysics: {
            metal: 4000,
            crystal: 8000,
            deuterium: 4000,
            energy: 0,
            cost: function (base_cost, next_level) {
                return Math.round(base_cost * Math.pow(1.75, next_level - 1) / 100.0) * 100.0;
            }
        },
        irn: {
            metal: 240000,
            crystal: 400000,
            deuterium: 160000,
            energy: 0,
            cost: doubled
        },
        graviton: {
            metal: 0,
            crystal: 0,
            deuterium: 0,
            energy: 300000,
            cost: doubled
        },
        weapons: {
            metal: 800,
            crystal: 200,
            deuterium: 0,
            energy: 0,
            cost: doubled
        },
        shielding: {
            metal: 200,
            crystal: 600,
            deuterium: 0,
            energy: 0,
            cost: doubled
        },
        armor: {
            metal: 1000,
            crystal: 0,
            deuterium: 0,
            energy: 0,
            cost: doubled
        }
    }
};

for (var i = res.length - 1; i >= 0; i--) {
    ResearchManagerImpl.addEntity( res[i][0], res[i][1], res[i][2]);
};

constants.managers.research = ResearchManagerImpl;
