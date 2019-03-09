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
    let roomX = positionX;

    for (let i=1; i <= rooms; i++) {
        console.log("onRooms internal", onRooms);
        roomX += padding;
        
        status = onRooms > 0 ? 1 : 0;
        onRooms--;

        var room = drawRoom(roomX, positionY + padding, status)

        stage.addChild(room);

        if (status == 1) {
            createjs.ColorPlugin.install();

            createjs.Tween.get(room)    
                .to({style:"#000000"}, 500)
                .to({style:"#FFFF00"}, 1000);
        }

        roomX += roomWidth;
    }

    return onRooms;
}

var drawBuilding = function(stage, building, positionX, positionY, onRooms, color) {        
    var graphics = new createjs.Graphics().beginFill(color)
        .drawRect(positionX, positionY, building.width, building.height);

    var shape = new createjs.Shape(graphics);

    stage.addChild(shape);

    createjs.Tween.get(shape, {loop: false})
        .to({ alpha: 0 }, 100)
        .to({ alpha: 1 }, 1000, createjs.Ease.getPowInOut(2));

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