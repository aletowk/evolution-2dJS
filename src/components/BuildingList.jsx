import React from "react"
import { Button } from "@mui/material"
import { useState } from 'react';

import Building from "./Building";

const building_list = []
let cnt = 0

export default function BuildingList(){
    const [buildings,setBuildings] = useState(building_list)

    function addBuilding()
    {
        setBuildings([cnt,...buildings])
        cnt++
    }
        
    return (
        <>
            <Button variant="contained" color="inherit" onClick={addBuilding}>Add one</Button>
            {buildings.map((building) => <Building key={building} name={building}/>)}
        </>
    )
}