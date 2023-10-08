import { createContext, useState, useMemo } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider, useTheme } from '@mui/material';
import './App.css';

import { Navbar } from './components/navbar/Navbar';
import { Profile } from './components/profile/Profile';
import { orange } from '@mui/material/colors';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const App = () => {
    const [mode, setMode] = useState('dark');
    const parentMode = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    }

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Profile />} />
        )
    )

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );
  
    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    primary: {
                        main: orange[500]
                    },
                    background: {
                        default: mode === 'dark' ? '#232323' : 'fafafa'
                    }
                },
            }),
        [mode],
    );
  
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Navbar position="fixed" parentMode={parentMode}/>
                <RouterProvider router={router} />
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}