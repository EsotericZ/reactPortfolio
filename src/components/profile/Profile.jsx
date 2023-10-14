import { AboutMe } from '../aboutMe/AboutMe';
import { Technologies } from '../technologies/Technologies';
import { Projects } from '../projects/Projects';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

import "./profile.css";

export const Profile = () => {
    return (
        <Box p={2} sx={{ flexGrow: 1, padding: "0px" }}>
            <AboutMe />

            <Divider variant="middle" />

            <Technologies />
         
            <Divider variant="middle" />

            <Projects />

            <Divider variant="middle" />

            <Grid container spacing={2} justifyContent="center" id='contact'>
                constact
                <Grid item xs={4}>
                    <Box>xs=4</Box>
                </Grid>
                <Grid item xs={8}>
                    <Box>xs=8</Box>
                </Grid>
            </Grid>
      </Box>
    )
}