function ResearchManager () {
    this.name = 'Research';
    this.page = 'research';
};

ResearchManager.inherits(BasicManager);
ResearchManagerImpl = new ResearchManager();

var doubled = function (base_cost, next_level) {
    return base_cost * Math.pow(2.0, next_level - 1);
};

var cost_astro = function (base_cost, next_level) {
    return Math.round(base_cost * Math.pow(1.75, next_level - 1) / 100.0) * 100.0;
};

var res = [
    ['energy',       'tech',  'details113', { metal: 0,      crystal: 800,    deuterium: 400,    energy: 0,      cost: doubled    }],
    ['laser',        'tech',  'details120', { metal: 200,    crystal: 100,    deuterium: 0,      energy: 0,      cost: doubled    }],
    ['ion',          'tech',  'details121', { metal: 1000,   crystal: 300,    deuterium: 100,    energy: 0,      cost: doubled    }],
    ['hyperspace',   'tech',  'details114', { metal: 0,      crystal: 4000,   deuterium: 2000,   energy: 0,      cost: doubled    }],
    ['plasma',       'tech',  'details122', { metal: 2000,   crystal: 4000,   deuterium: 1000,   energy: 0,      cost: doubled    }],
    ['combustion',   'drive', 'details115', { metal: 400,    crystal: 0,      deuterium: 600,    energy: 0,      cost: doubled    }],
    ['impulse',      'drive', 'details115', { metal: 2000,   crystal: 4000,   deuterium: 600,    energy: 0,      cost: doubled    }],
    ['hyperspace',   'drive', 'details118', { metal: 10000,  crystal: 20000,  deuterium: 6000,   energy: 0,      cost: doubled    }],
    ['espionage',    'tech',  'details106', { metal: 200,    crystal: 1000,   deuterium: 200,    energy: 0,      cost: doubled    }],
    ['computer',     'tech',  'details108', { metal: 0,      crystal: 400,    deuterium: 600,    energy: 0,      cost: doubled    }],
    ['astrophysics', 'tech',  'details124', { metal: 4000,   crystal: 8000,   deuterium: 4000,   energy: 0,      cost: cost_astro }],
    ['irn',          'tech',  'details123', { metal: 240000, crystal: 400000, deuterium: 160000, energy: 0,      cost: doubled    }],
    ['graviton',     'tech',  'details199', { metal: 0,      crystal: 0,      deuterium: 0,      energy: 300000, cost: doubled    }],
    ['weapons',      'tech',  'details109', { metal: 800,    crystal: 200,    deuterium: 0,      energy: 0,      cost: doubled    }],
    ['shielding',    'tech',  'details110', { metal: 200,    crystal: 600,    deuterium: 0,      energy: 0,      cost: doubled    }],
    ['armor',        'tech',  'details111', { metal: 1000,   crystal: 0,      deuterium: 0,      energy: 0,      cost: doubled    }]
];

for (var i = res.length - 1; i >= 0; i--) {
    ResearchManagerImpl.addEntity(res[i][0], res[i][1], res[i][2]);
};

res = null;

constants.managers.research = ResearchManagerImpl;
