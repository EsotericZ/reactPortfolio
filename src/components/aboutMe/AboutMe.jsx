import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

import profile from "../../assets/profile.jfif";
import "./aboutMe.css";

export const AboutMe = () => {
    return (
        <Box id="home">
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
      </Box>
    )
}