import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import profile from "../../assets/profile.jfif";
import "./profile.css";

export const Profile = () => {
    return (
        <Box p={2} mt={20} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} md={6} lg={5}>
                    <Box id="profileIntro">
                        <Typography variant='h1' gutterBottom>
                            Intro words    
                        </Typography>
                        <Typography variant='h4'>
                            About Me Some
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={5}>
                    <Box id="profileImg">
                        <img src={profile} alt="profilePic" />
                    </Box>
                </Grid>
            </Grid>
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