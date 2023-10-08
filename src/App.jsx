import { createContext, useContext, useState, useMemo } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider, useTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import './App.css';

import { Navbar } from './components/navbar/Navbar';
import { Profile } from './components/profile/Profile';
import { orange } from '@mui/material/colors';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function MyApp() {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                color: 'text.primary',
                borderRadius: 1,
                p: 3,
            }}
        >
            {theme.palette.mode} mode
                <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
        </Box>
    )
}

export const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Profile />} />
        )
    )

    const [mode, setMode] = useState('dark');
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
                <Navbar position="fixed" />
                <MyApp />
                <RouterProvider router={router} />
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}