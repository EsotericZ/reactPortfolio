import { useLayoutEffect, useRef } from "react";
import { Fireworks } from "@fireworks-js/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import mmSite from '../../assets/mmSite.png';
import coRBRank from '../../assets/coRBRank.png';
import "./projects.css";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';

import bootstrapImg from '../../assets/bootstrap.png';
import cssImg from '../../assets/css.png';
import mongoImg from '../../assets/mongo.png';
import muiImg from '../../assets/mui.png';
import nodeImg from '../../assets/node.png';
import reactImg from '../../assets/react.png';

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
    const component = useRef();
    const slider = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let panels = gsap.utils.toArray(".panel");
            gsap.to(panels, {
                xPercent: -100 * (panels.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: slider.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (panels.length - 1),
                    end: () => "+=" + slider.current.offsetWidth,
                }
            });
        }, component);
        return () => ctx.revert();
    });
    
    useLayoutEffect(() => {
        gsap.to(".bounceImg", {x: (i) => 15 * i, repeat: -1, yoyo: true, duration: 1})
        gsap.to(".rtr", {x: (i) => -15 * i, repeat: -1, yoyo: true, duration: 1})
    })
    
    useLayoutEffect(() => {
        gsap.to(".bounceImg2", {x: (i) => 20 * i, repeat: -1, yoyo: true, duration: 1})
        gsap.to(".rtr2", {x: (i) => -20 * i, repeat: -1, yoyo: true, duration: 1})
    })
    
    const boxRef = useRef();
    const boxRef2 = useRef();

    useLayoutEffect(() => {
        gsap.fromTo(boxRef.current, 
            {rotation: 0},
            {rotation: "+=3600", duration: 30, scrollTrigger: {trigger: boxRef.current}})

        gsap.fromTo(boxRef2.current, 
            {rotation: 0},
            {rotation: "+=3600", duration: 30, scrollTrigger: {trigger: boxRef.current}})
    })

    return (
        <div ref={component} id="projects">
            <div ref={slider} className="container">
                <div className="panel">
                    PROJECTS
                    <Fireworks
                        options={{
                            rocketsPoint: {
                                min: 0,
                                max: 100
                            }
                        }}
                        style={{
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            position: "fixed",
                            background: "linear-gradient(#e66465, #9198e5);"
                        }}
                    />
                </div>
                <div className="panel red">
                    <Box className="projectBox">
                        <Grid container justifyContent="center">
                            <div className='rtr'></div>
                            <Grid item xs={4} sm={3} md={2} display="flex" justifyContent="center">
                                <Box className="techImgBox" display="grid" justifyItems="center" alignItems="center">
                                    <img src={bootstrapImg} alt="bootstrapImg" className="techImg rtr" />
                                </Box>
                            </Grid>
                            <Grid item xs={4} sm={3} md={2} display="flex" justifyContent="center">
                                <Box className="techImgBox" display="grid" justifyItems="center" alignItems="center">
                                    <img src={reactImg} alt="reactImg" ref={boxRef} className="techImg bounceImg" />
                                </Box>
                            </Grid>
                            <Grid item xs={4} sm={3} md={2} display="flex" justifyContent="center">
                                <Box className="techImgBox" display="grid" justifyItems="center" alignItems="center">
                                    <img src={cssImg} alt="cssImg" className="cssPic techImg bounceImg" />
                                </Box>
                            </Grid>
                        </Grid>
                        <div className="projectContainer">
                            <Box className="projectBoxLeft">
                                <Stack direction="column" spacing={2}>
                                    <Typography variant='h3'>
                                        Monarch Metal Manufacturing
                                    </Typography>
                                    <Divider className="projectDivider" />
                                    <Typography variant='h5'>
                                        Monarch Metal Manufacturing Monarch Metal Manufacturing Monarch Metal Manufacturing Monarch Metal Manufacturing Monarch Metal Manufacturing
                                    </Typography>
                                    <Stack direction="row" spacing={5} display="flex" justifyContent="center">
                                        <Button className='projectBtn' variant="contained" startIcon={<WebIcon />} href='https://externalsite-production.up.railway.app' target='_blank'>
                                            LIVE SITE
                                        </Button>
                                        <Button className='projectBtn' variant="contained" endIcon={<GitHubIcon />} href="https://github.com/Monarch-Metal/externalSite" target='_blank'>
                                            CODE
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Box>
                            <img src={mmSite} alt="monarchPic" className="projectImgLeft imgHover" />
                        </div>
                    </Box>
                </div>




                <div className="panel orange">
                    <Box className="projectBox">
                    <Grid container justifyContent="center">
                            <div className='rtr2'></div>
                            <Grid item xs={4} sm={3} md={2} display="flex" justifyContent="center">
                                <Box className="techImgBox" display="grid" justifyItems="center" alignItems="center">
                                    <img src={mongoImg} alt="mongoImg" className="techImg rtr2" />
                                </Box>
                            </Grid>
                            <Grid item xs={4} sm={3} md={2} display="flex" justifyContent="center">
                                <Box className="techImgBox" display="grid" justifyItems="center" alignItems="center">
                                    <img src={reactImg} alt="reactImg" ref={boxRef2} className="techImg bounceImg2" />
                                </Box>
                            </Grid>
                            <Grid item xs={4} sm={3} md={2} display="flex" justifyContent="center">
                                <Box className="techImgBox" display="grid" justifyItems="center" alignItems="center">
                                    <img src={muiImg} alt="muiImg" className="techImg bounceImg2" />
                                </Box>
                            </Grid>
                        </Grid>
                        <div className="projectContainer">
                            <Box className="projectBoxRight">
                                <Stack direction="column" spacing={2}>
                                    <Typography variant='h3'>
                                        CO RBall Ranks
                                    </Typography>
                                    <Divider className="projectDivider" />
                                    <Typography variant='h5'>
                                        Stuff About CO RB Rank Yippee
                                    </Typography>
                                    <Stack direction="row" spacing={5} display="flex" justifyContent="center">
                                        <Button className='projectBtn' variant="contained" startIcon={<WebIcon />} href='https://corballrank-production.up.railway.app/' target='_blank'>
                                            LIVE SITE
                                        </Button>
                                        <Button className='projectBtn' variant="contained" endIcon={<GitHubIcon />} href="https://github.com/EsotericZ/coRBallRank" target='_blank'>
                                            CODE
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Box>
                            <img src={coRBRank} alt="corballPic" className="projectImgRight imgHover" />
                        </div>
                    </Box>
                </div>
                <div className="panel purple">
                    <Box className="projectBox">
                        <Grid container justifyContent="center">
                            <Grid item xs={4} sm={3} md={2} display="flex" justifyContent="center">
                                <Box className="techImgBox" display="grid" justifyItems="center" alignItems="center">
                                    <img src={reactImg} alt="reactImg" className="techImg" />
                                </Box>
                            </Grid>
                            <Grid item xs={4} sm={3} md={2} display="flex" justifyContent="center">
                                <Box className="techImgBox" display="grid" justifyItems="center" alignItems="center">
                                    <img src={nodeImg} alt="nodeImg" className="techImg" />
                                </Box>
                            </Grid>
                            <Grid item xs={4} sm={3} md={2} display="flex" justifyContent="center">
                                <Box className="techImgBox" display="grid" justifyItems="center" alignItems="center">
                                    <img src={muiImg} alt="muiImg" className="techImg" />
                                </Box>
                            </Grid>
                            <Grid item xs={4} sm={3} md={2} display="flex" justifyContent="center">
                                <Box className="techImgBox" display="grid" justifyItems="center" alignItems="center">
                                    <img src={mongoImg} alt="mongoImg" className="techImg" />
                                </Box>
                            </Grid>
                        </Grid>
                        <div className="projectContainer">
                            <Box className="projectBoxLeft">
                                <Stack direction="column" spacing={2}>
                                    <Typography variant='h3'>
                                        Monarch Metal Manufacturing
                                    </Typography>
                                    <Divider className="projectDivider" />
                                    <Typography variant='h5'>
                                        Monarch Metal Manufacturing Monarch Metal Manufacturing Monarch Metal Manufacturing Monarch Metal Manufacturing Monarch Metal Manufacturing
                                    </Typography>
                                    <Stack direction="row" spacing={5} display="flex" justifyContent="center">
                                        <Button className='projectBtn' variant="contained" startIcon={<WebIcon />} href='https://externalsite-production.up.railway.app' target='_blank'>
                                            LIVE SITE
                                        </Button>
                                        <Button className='projectBtn' variant="contained" endIcon={<GitHubIcon />} href="https://github.com/Monarch-Metal/externalSite" target='_blank'>
                                            CODE
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Box>
                            <img src={mmSite} alt="monarchPic" className="projectImgLeft imgHover" />
                        </div>
                    </Box>
                </div>
            </div>
        </div>
    );
}