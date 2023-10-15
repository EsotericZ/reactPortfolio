import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import "./contact.css";

export const Contact = () => {
    return (
        <Box id="contact" className="moreStuff">
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
            </Grid>
      </Box>
    )
}