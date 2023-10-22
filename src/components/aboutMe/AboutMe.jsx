import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { TypeAnimation } from 'react-type-animation';

import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { blue } from '@mui/material/colors';
import { orange } from '@mui/material/colors';
import { purple } from '@mui/material/colors';

import profile from "../../assets/profile.jfif";
import "./aboutMe.css";

const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';

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
                            <TypeAnimation
                                cursor={false}
                                className={CURSOR_CLASS_NAME}
                                sequence={[
                                    'React',
                                    1000,
                                    'Node',
                                    1000,
                                    'MongoDB',
                                    1000,
                                    'JavaScript',
                                    1000,
                                    'MySQL',
                                    1000,
                                    'Python',
                                    1000,
                                    'Full Stack Web Developer',
                                    (el) => el.classList.remove(CURSOR_CLASS_NAME)
                                ]}
                                speed={50}
                            />
                        </Typography>
                        <Divider className="introDivider" />
                        <Typography variant='h4' className="introAboutMe">
                            Passionate about programing, life long learning and works well in a team environment. Recognized as a proactive, resourceful, and persistent problem-solver.
                        </Typography>
                        <Grid container justifyContent="center" className="techSpace">
                            <Grid item xs={4} sm={3} md={2} display="flex" justifyContent="center">
                                <Box className="techImgBox" display="grid" justifyItems="center" alignItems="center">
                                    <GitHubIcon
                                        className="homeIcon"
                                        style={{ fontSize: 60 }} 
                                        sx={{ color: orange[500] }}  
                                        onClick={() => window.open('https://github.com/EsotericZ', '_blank')}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={4} sm={3} md={2} display="flex" justifyContent="center">
                                <Box className="techImgBox" display="grid" justifyItems="center" alignItems="center">
                                    <LinkedInIcon 
                                        className="homeIcon"
                                        style={{ fontSize: 60 }} 
                                        sx={{ color: blue[500] }} 
                                        onClick={() => window.open('https://www.linkedin.com/in/cj-sanders1986', '_blank')}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={4} sm={3} md={2} display="flex" justifyContent="center">
                                <Box className="techImgBox" display="grid" justifyItems="center" alignItems="center">
                                    <MailIcon 
                                        className="homeIcon"
                                        style={{ fontSize: 60 }} 
                                        sx={{ color: purple[500] }} 
                                        onClick={() => window.open('mailto:cjsand03@gmail.com')}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
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