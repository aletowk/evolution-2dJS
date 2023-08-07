import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import { FormGroup, FormControlLabel } from '@mui/material';

import { Button, Switch } from '@mui/base';
import BuildingList from './components/BuildingList';

function App() {
    const [light,setLight] = useState(true)
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });
    const lightTheme = createTheme({
        palette:{
            mode: 'light'
        }
    })

    return (
        <>
            <ThemeProvider theme={light ? lightTheme : darkTheme}>
                <CssBaseline />
                <div>
                <FormGroup>
                    <FormControlLabel control={
                        <Switch 
                            checked={light}
                            onChange={
                                function(e){
                                    setLight(e.currentTarget.checked)
                                }
                            }
                            inputprops={{ 'aria-label': 'controlled' }}
                        />
                    } label="Light Mode" />
                </FormGroup>
                </div>
                <div>
                    <BuildingList />
                </div>
            </ThemeProvider>
        </>
    )
}

export default App
