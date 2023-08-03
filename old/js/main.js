window.onload = function () {
    main();
}

class Building{
    constructor(name,description){
        this.name = name;
        this.description = description;
    }

    build(){
        // TODO
    }
}

function main() {
    console.log(`Load took ${performance.now()} ms`);
    init_building_list_render();
}

var player_buildings = [
    new Building('Tavern', "Where we drink"),
    new Building('Habitation District', "Where people live")
]


function init_building_list_render(){
    let i = 0;
    player_buildings.forEach(function(building){
        i += 1
        var new_tbl_entry = '<tr>' +
                            `<th scope="row">${i}</th>`+
                            `<td>${building.name}</td>` +
                            `<td>${building.description}</td>` +
                            '</tr>'
        $("#city_buildings_table").append(new_tbl_entry)
    });
}