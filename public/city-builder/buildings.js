let getFloorWidth = function(rooms) {
    return (roomWidth * rooms) + (padding * (rooms+1));
};

let getFloorHeight = function() {
    return roomHeight + 2 * padding;
}

class Building {
    constructor(id, type, floors, rooms, color) {
        this.id = id;
        this.type = type;
        this.floors = floors;
        this.rooms = rooms;
        this.color = color;
        this.width = getFloorWidth(rooms);
        this.height = getFloorHeight() * floors + entranceHeight + roofHeight;        
    }

    getRoomsNumber() {
        return this.rooms.length;
    }
}
