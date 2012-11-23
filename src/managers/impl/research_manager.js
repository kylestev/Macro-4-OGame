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

for (var i = res.length - 1; i >= 0; i--) {
    ResearchManagerImpl.addEntity( res[i][0], res[i][1], res[i][2]);
};

constants.managers.research = ResearchManagerImpl;
