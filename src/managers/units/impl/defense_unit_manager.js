DefenseUnitManager = new UnitManager();

units = [
    ['ion',     'cannon',   'defense401'],
    ['gauss',   'cannon',   'defense401'],
    ['light',   'laser',    'defense402'],
    ['heavy',   'laser',    'defense403'],
    ['plasma',  'turret',   'defense401'],
    ['rocket',  'launcher', 'defense401'],
    ['small',   'shield',   'defense407'],
    ['large',   'shield',   'defense408'],
    ['anti',    'missile',  'defense502'],
    ['inter',   'missile',  'defense503']
];

for (var i = units.length - 1; i >= 0; i--) {
    DefenseUnitManager.addEntity(units[i][0], units[i][1], units[i][2]);
};

constants.managers.buildings.defense = DefenseUnitManager;
