import { AboutMe } from '../aboutMe/AboutMe';
import { Contact } from '../contact/Contact';
import { Technologies } from '../technologies/Technologies';
import { Projects } from '../projects/Projects';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

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
            <Contact />
      </Box>
    )
}