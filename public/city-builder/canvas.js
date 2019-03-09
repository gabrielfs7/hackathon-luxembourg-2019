var stage;
function init(onRooms) {                      
    console.log("onRooms ", onRooms);  
    stage = new createjs.Stage("cityCanvas");

    var hospital = new Building(1, "hospital", 2, 4);                       
    var school = new Building(1, "school", 1, 2);                       
    var university = new Building(1, "university", 3, 3);      
    var house = new Building(1, "house", 1, 3);      
    console.log(hospital);

    let positionX = 5;
    
    onRooms = drawBuilding(stage, hospital, positionX, (canvasHeight - hospital.height), onRooms, "#DDDDDD");    
    positionX += hospital.width + buildingsPadding;
    onRooms = drawBuilding(stage, school, positionX, (canvasHeight - school.height), onRooms, "#1694c9");    
    positionX += school.width + buildingsPadding;
    onRooms = drawBuilding(stage, house, positionX, (canvasHeight - house.height), onRooms, "#FFAAAA");    
    positionX += house.width + buildingsPadding;
    onRooms = drawBuilding(stage, university, positionX, (canvasHeight - university.height), onRooms, "#FF0000");    
    
    stage.update();
}

function refresh(onRooms) {
    stage.removeAllChildren();
    stage.removeAllEventListeners();
    stage.update();
    init(onRooms);
}