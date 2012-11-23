ShipyardUnitManager = new UnitManager();

units = [
    ['light',         'fighter', 'military204'],
    ['heavy',         'fighter', 'military205'],
    ['cruiser',       'armored', 'military206'],
    ['battleship',    'armored', 'military207'],
    ['battlecruiser', 'armored', 'military215'],
    ['bomber',        'armored', 'military211'],
    ['destroyer',     'armored', 'military213'],
    ['deathstar',     'armored', 'military214'],
    ['small',         'cargo',   'civil202'   ],
    ['large',         'cargo',   'civil203'   ],
    ['solar',         'energy',  'civil212'   ],
    ['colony',        'civil',   'civil208'   ],
    ['recycler',      'civil',   'civil209'   ],
    ['espionage',     'recon',   'civil210'   ]
];

for (var i = units.length - 1; i >= 0; i--) {
    ShipyardUnitManager.addEntity( units[i][0], units[i][1], units[i][2]);
};

constants.managers.buildings.shipyard = ShipyardUnitManager;
