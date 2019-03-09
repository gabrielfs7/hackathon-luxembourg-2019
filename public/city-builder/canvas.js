var stage;
var positionX = 5;
var totalRooms = 0;

var buildings = [
    new Building(1, "library", 2, 4, "#DDDDDD"),
    new Building(1, "school", 2, 2, "#1694c9"),
    new Building(1, "university", 3, 3, "#902290"),
    new Building(1, "house", 1, 2, "#006600")
];

function init(onRooms, mustRefresh, buildingNumber, createNewHouse) {
    console.log(createNewHouse);

    if (createNewHouse && createNewHouse !== "1") {
        return;
    }

    if (buildingNumber === false) {
        buildingNumber = Math.floor(Math.random() * (buildings.length - 1));
    }

    building = buildings[buildingNumber];

    console.log("onRooms ", onRooms);
    if (mustRefresh) {
        stage = new createjs.Stage("cityCanvas");
    }

    onRooms = drawBuilding(stage, building, positionX, (canvasHeight - building.height), onRooms, building.color);
    positionX += building.width + buildingsPadding;
    // onRooms = drawBuilding(stage, school, positionX, (canvasHeight - school.height), onRooms, "#1694c9");
    // positionX += school.width + buildingsPadding;
    // onRooms = drawBuilding(stage, house, positionX, (canvasHeight - house.height), onRooms, "#FFAAAA");
    // positionX += house.width + buildingsPadding;
    // onRooms = drawBuilding(stage, university, positionX, (canvasHeight - university.height), onRooms, "#FF0000");

    createjs.Ticker.framerate = 60;
    createjs.Ticker.addEventListener("tick", stage)
    //stage.update();
}

function refresh(onRooms) {
    stage.removeAllChildren();
    stage.removeAllEventListeners();
    stage.update();
    init(onRooms);
}