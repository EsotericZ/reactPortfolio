import { useLayoutEffect, useRef } from 'react';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import bootstrapImg from '../../assets/bootstrap.png';
import cssImg from '../../assets/css.png';
import gitImg from '../../assets/git.png';
import graphqlImg from '../../assets/graphql.png';
import htmlImg from '../../assets/html.png';
import javascriptImg from '../../assets/javascript.png';
import mongoImg from '../../assets/mongo.png';
import muiImg from '../../assets/mui.png';
import mysqlImg from '../../assets/mysql.png';
import nodeImg from '../../assets/node.png';
import profile from "../../assets/profile.jfif";
import pythonImg from '../../assets/python.png';
import reactImg from '../../assets/react.png';

import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';


// gsap.registerPlugin(ScrollTrigger);
// gsap.from('.box', {rotation: 0}, {rotation: 180, duration: 3})

import "./profile.css";

export const Profile = () => {
    const boxRef = useRef();
    useLayoutEffect(() => {
        gsap.to(boxRef.current, {
            rotation: "+=360", duration: 3
        })
    })

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

            <Divider variant="middle" />
            
            <Typography variant="h3" gutterBottom textAlign="center">
                Technologies
            </Typography>
            <Grid container justifyContent="center">
                <Grid item xs={4} sm={3} md={2} display="flex" justifyContent="center" mb={4}>
                    <Box className="techImgBox" display="grid" justifyItems="center" alignItems="center">
                        <img src={reactImg} alt="reactImg" ref={boxRef} className="techImg" />
                        React.js
                    </Box>
                </Grid>
                <Grid item xs={4} sm={3} md={2} display="flex" justifyContent="center">
                    <Box className="techImgBox" display="grid" justifyItems="center" alignItems="center">
                        <img src={nodeImg} alt="nodeImg" className="techImg" />
                        Node.js
                    </Box>
                </Grid>
                <Grid item xs={4} sm={3} md={2} display="flex" justifyContent="center">
                    <Box className="techImgBox" display="grid" justifyItems="center" alignItems="center">
                        <img src={muiImg} alt="muiImg" className="techImg" />
                        MaterialUI
                    </Box>
                </Grid>
                <Grid item xs={4} sm={3} md={2} display="flex" justifyContent="center">
                    <Box className="techImgBox" display="grid" justifyItems="center" alignItems="center">
                        <img src={mongoImg} alt="mongoImg" className="techImg" />
                        MongoDB
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={2} justifyContent="center" mb={4}>
                <Grid item xs={4} sm={3} md={2} display="flex" justifyContent="center">
                    <Box className="techImgBox" display="grid" justifyItems="center" alignItems="center">
                        <img src={graphqlImg} alt="graphqlImg" className="techImg" />
                        GraphQL
                    </Box>
                </Grid>
                <Grid item xs={4} sm={3} md={2} display="flex" justifyContent="center">
                    <Box className="techImgBox" display="grid" justifyItems="center" alignItems="center">
                        <img src={mysqlImg} alt="mysqlImg" className="mysqlPic techImg" />
                        MySQL
                    </Box>
                </Grid>
                <Grid item xs={4} sm={3} md={2} display="flex" justifyContent="center">
                    <Box className="techImgBox" display="grid" justifyItems="center" alignItems="center">
                        <img src={pythonImg} alt="pythonImg" className="pythonPic techImg" />
                        Python
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={2} justifyContent="center" mb={4}>
                <Grid item xs={4} sm={3} md={2} display="flex" justifyContent="center">
                    <Box className="techImgBox" display="grid" justifyItems="center" alignItems="center">
                        <img src={javascriptImg} alt="javascriptImg" className="techImg" />
                        JavaScript
                    </Box>
                </Grid>
                <Grid item xs={4} sm={3} md={2} display="flex" justifyContent="center">
                    <Box className="techImgBox" display="grid" justifyItems="center" alignItems="center">
                        <img src={htmlImg} alt="htmlImg" className="techImg" />
                        HTML
                    </Box>
                </Grid>
                <Grid item xs={4} sm={3} md={2} display="flex" justifyContent="center">
                    <Box className="techImgBox" display="grid" justifyItems="center" alignItems="center">
                        <img src={cssImg} alt="cssImg" className="cssPic techImg" />
                        CSS
                    </Box>
                </Grid>
                <Grid item xs={4} sm={3} md={2} display="flex" justifyContent="center">
                    <Box className="techImgBox" display="grid" justifyItems="center" alignItems="center">
                        <img src={gitImg} alt="gitImg" className="techImg" />
                        Git
                    </Box>
                </Grid>
            </Grid>
      </Box>
    )
}