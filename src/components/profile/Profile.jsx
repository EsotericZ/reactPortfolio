import { Technologies } from '../technologies/Technologies';
import { HorizontalScroll } from '../horizontalScroll/HorizontalScroll';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

import profile from "../../assets/profile.jfif";
import "./profile.css";

export const Profile = () => {
    return (
        <Box p={2} mt={15} sx={{ flexGrow: 1, padding: "0px" }}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} md={6} lg={5}>
                    <Box>
                        <Typography variant='h1' className="introName">
                            CJ Sanders    
                        </Typography>
                        <Typography variant='h3' gutterBottom>
                            Full Stack Web Developer
                        </Typography>
                        <Divider className="introDivider" />
                        <Typography variant='h4' className="introAboutMe">
                            About Me Some
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={5}>
                    <Box id="profileImg">
                        <img src={profile} alt="profilePic" className="profilePic" />
                    </Box>
                </Grid>
            </Grid>
            <Typography variant='h5' textAlign="center" pb={3}>Scroll For More</Typography>
            <div className="arrow bounce">
                <KeyboardDoubleArrowDownIcon sx={{ fontSize: 50 }} />
            </div>

            <Divider variant="middle" />

            <Technologies />
         
            <Divider variant="middle" />

            <HorizontalScroll />

            <Divider variant="middle" />

            <Grid container spacing={2} justifyContent="center">
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