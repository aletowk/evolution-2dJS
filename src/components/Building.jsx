import { Button } from "@mui/material"

function Building({name}){
    return (
        <>
            <div>
                <Button>
                    My Building : {name}
                </Button>
            </div>
        </>
    )
}

export default Building