var FacilitiesBuildingManager = new BuildingManager('Facilities', 'facilities');

entities = [
    ['nanite',      'factories', 'station15'],
    ['robotics',    'factories', 'station14'],
    ['missile',     'battle',    'station44'],
    ['alliance',    'battle',    'station34'],
    ['shipyard',    'battle',    'station21'],
    ['research',    'research',  'station31'],
    ['terraformer', 'research',  'station33']
];

for (var i = entities.length - 1; i >= 0; i--) {
    FacilitiesBuildingManager.addEntity( entities[i][0], entities[i][1], entities[i][2]);
};

constants.managers.buildings.facilities = FacilitiesBuildingManager;
