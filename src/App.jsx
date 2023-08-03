import Building from "./components/Building"

function BuildingList(){
    const building_list = ["Tavern","Town Hall"]
    return building_list.map((building) => <Building name={building}/>)
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
