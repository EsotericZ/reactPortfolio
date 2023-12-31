import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AppsIcon from '@mui/icons-material/Apps';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import CodeIcon from '@mui/icons-material/Code';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import CottageIcon from '@mui/icons-material/Cottage';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import StorageIcon from '@mui/icons-material/Storage';

const navigation = [
    {
        area: 'Home',
        link: '#home'
    },
    {
        area: 'Technologies',
        link: '#technologies'
    },
    {
        area: 'Projects',
        link: '#projects'
    },
    {
        area: 'Contact',
        link: '#contact'
    },
]

const links = [
    {
        site: 'GithHub',
        url: 'https://github.com/EsotericZ'
    },
    {
        site: 'LinkedIn',
        url: 'https://www.linkedin.com/in/cj-sanders1986'
    },
];

export const Navbar = ({parentMode}) => {
    const [theme, setTheme] = useState('dark')
    const changeTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
        parentMode(theme)
    }

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountBoxIcon />
                        </ListItemIcon>
                        <ListItemText primary={'CJ Sanders'} />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List>
                {navigation.map((nav, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton href={nav.link}>
                            <ListItemIcon>
                                {nav.area === 'Home' && <CottageIcon />}
                                {nav.area === 'Technologies' && <AppsIcon />}
                                {nav.area === 'Projects' && <StorageIcon />}
                                {nav.area === 'Contact' && <ConnectWithoutContactIcon />}
                            </ListItemIcon>
                            <ListItemText primary={nav.area} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {links.map((link, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton href={link.url} target='__blank'>
                            <ListItemIcon>
                                {index % 2 === 0 ? <GitHubIcon /> : <LinkedInIcon />}
                            </ListItemIcon>
                            <ListItemText primary={link.site} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar 
            color="transparent"
            sx={{ backdropFilter: "blur(20px)" }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <CodeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        // href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        SANDERS
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: 'transparent',
                            color: 'text.primary',
                            borderRadius: 1,
                            p: 3,
                        }}
                    >
                        <IconButton sx={{ ml: 1 }} onClick={changeTheme} color="inherit">
                            {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <IconButton sx={{ p: 0 }}>
                            <Drawer
                                onClick={(e) => {e.stopPropagation()}}
                                anchor={'right'}
                                open={state['right']}
                                onClose={toggleDrawer('right', false)}
                            >
                                {list('right')}
                            </Drawer>
                            <MenuIcon onClick={toggleDrawer('right', true)} />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}