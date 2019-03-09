var drawRoom = function(positionX, positionY, status) {        
    console.log("status ", status);
    color = "#000000";
    if (status == 1) {
        color = "#FFFF00";
    }

    var graphics = new createjs.Graphics().beginFill(color)
            .drawRect(positionX, positionY, roomWidth, roomHeight);

    var shape = new createjs.Shape(graphics);    

    return shape;
} 

var drawFloor = function(stage, positionX, positionY, rooms, level, onRooms) {
    // console.log("Floor n. ", level);
    // let color = "#555555";
    // if (level % 2 === 0) {
    //     color = "#999999";
    // }
    // var graphics = new createjs.Graphics().beginFill(color)
    //         .drawRect(positionX, positionY, getFloorWidth(rooms), getFloorHeight());

    // var shape = new createjs.Shape(graphics);

    // stage.addChild(shape);

    let roomX = positionX;

    for (let i=1; i <= rooms; i++) {
        console.log("onRooms internal", onRooms);
        roomX += padding;
        
        status = onRooms > 0 ? 1 : 0;
        onRooms--;

        stage.addChild(drawRoom(roomX, positionY + padding, status));
        roomX += roomWidth;
    }

    return onRooms;
}

var drawBuilding = function(stage, building, positionX, positionY, onRooms, color) {        
    var graphics = new createjs.Graphics().beginFill(color)
        .drawRect(positionX, positionY, building.width, building.height);

    var shape = new createjs.Shape(graphics);

    stage.addChild(shape);

    for (let i=1; i <= building.floors; i++) {
        let floorX = positionX;
        let floorY = canvasHeight - (getFloorHeight() * i) - entranceHeight;

        onRooms = drawFloor(stage, floorX, floorY, building.rooms, i, onRooms);
    }

    var text = new createjs.Text(building.type, "14px Arial", "#FFFFFF");
    text.x = positionX;
    text.y = canvasHeight - 20 - building.height;
 

    stage.addChild(text);

    return onRooms;
}