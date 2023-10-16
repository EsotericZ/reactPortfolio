import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

import profile from "../../assets/profile.jfif";
import "./projects.css";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';

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

    return (
        <div ref={component} id="projects">
            <div ref={slider} className="container">
                <div className="panel">PROJECTS</div>
                <div className="panel red">
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
                                        <Button variant="contained" startIcon={<WebIcon />}>
                                            Live SITE
                                        </Button>
                                        <Button variant="contained" endIcon={<GitHubIcon />}>
                                            CODE
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Box>
                            <img src={profile} alt="monarchPic" className="monarchPic" />
                        </div>
                    </Box>
                </div>
                <div className="panel orange">TWO</div>
                <div className="panel purple">THREE</div>
            </div>
            {/* <div className="lastContainer">Last Container</div> */}
        </div>
    );
}