var ResourceBuildingManager = new BuildingManager('Resources', 'resources');

var res = [
    ['metal',       'mines',       'supply1' ],
    ['crystal',     'mines',       'supply2' ],
    ['deuterium',   'mines',       'supply3' ],
    ['solar',       'power',       'supply4' ],
    ['fusion',      'power',       'supply12'],
    ['metal',       'storage',     'supply22'],
    ['crystal',     'storage',     'supply23'],
    ['deuterium',   'storage',     'supply24'],
    ['metal',       'storage_den', 'supply25'],
    ['crystal',     'storage_den', 'supply26'],
    ['deuterium',   'storage_den', 'supply27']
];

for (var i = res.length - 1; i >= 0; i--) {
    ResourceBuildingManager.addEntity(res[i][0], res[i][1], res[i][2]);
};

res = null;

constants.managers.buildings.resources = ResourceBuildingManager;
