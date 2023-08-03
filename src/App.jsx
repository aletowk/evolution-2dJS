import Building from "./components/Building"

import { useState } from 'react';

const building_list = []
let cnt = 0

function BuildingList(){
    const [buildings,setBuildings] = useState(building_list)

    function addBuilding()
    {
        setBuildings([cnt,...buildings])
        cnt++
    }
        
    return (
        <>
            <button onClick={addBuilding}>Add one</button>
            {buildings.map((building) => <Building name={building}/>)}
        </>
    )
}

function App() {
  return (
    <>
        <div>
            <BuildingList />
            <Building name="toto"></Building>
        </div>
    </>
  )
}

export default App
