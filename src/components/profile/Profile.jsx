import { useLayoutEffect, useEffect, useRef, forwardRef } from 'react';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

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

import "./profile.css";

import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FadeInTech1 = forwardRef(({ children, stagger = 0, x = 0 }, ref) => {
    const elTech1 = useRef();
    const animationTech1 = useRef();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            animationTech1.current = gsap.fromTo(elTech1.current.children,
                {opacity: 0, stagger: 0.1, x:-800},
                {opacity: 1, stagger, x, scrollTrigger: {
                    scrub: 1,
                    trigger: elTech1.current.children,
                    start: "top 80%",
                    end: "top 60%"
                }}
            );
        });
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        if (typeof ref === "function") {
            ref(animationTech1.current);
        } else if (ref) {
            ref.current = animationTech1.current;
        }
    }, [ref]);

    return <span ref={elTech1}>{children}</span>
});

const FadeInTech2 = forwardRef(({ children, stagger = 0, x = 0 }, ref) => {
    const elTech2 = useRef();
    const animationTech2 = useRef();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            animationTech2.current = gsap.fromTo(elTech2.current.children, 
                {opacity: 0, stagger: 0.1, x:800},
                {opacity: 1, stagger, x, scrollTrigger: {
                    scrub: 1,
                    trigger: elTech2.current.children,
                    start: "top 80%",
                    end: "top 60%",
                }}
            );
        });
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        if (typeof ref === "function") {
            ref(animationTech2.current);
        } else if (ref) {
            ref.current = animationTech2.current;
        }
    }, [ref]);

    return <span ref={elTech2}>{children}</span>
});

const FadeInTech3 = forwardRef(({ children, stagger = 0, x = 0 }, ref) => {
    const elTech3 = useRef();
    const animationTech3 = useRef();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            animationTech3.current = gsap.fromTo(elTech3.current.children, 
                {opacity: 0, stagger: 0.1, x:-800},
                {opacity: 1, stagger, x, scrollTrigger: {
                    scrub: 1,
                    trigger: elTech3.current.children,
                    start: "top 80%",
                    end: "top 60%",
                }}
            );
        });
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        if (typeof ref === "function") {
            ref(animationTech3.current);
        } else if (ref) {
            ref.current = animationTech3.current;
        }
    }, [ref]);

    return <span ref={elTech3}>{children}</span>
});


export const Profile = () => {

    const animationTech1 = useRef();
    const animationTech2 = useRef();
    const animationTech3 = useRef();
    const toggle = () => {
        animationTech1.current.reversed(!animationTech1.current.reversed());
    };
    const toggle2 = () => {
        animationTech2.current.reversed(!animationTech2.current.reversed());
    };
    const toggle3 = () => {
        animationTech3.current.reversed(!animationTech3.current.reversed());
    };

    const boxRef = useRef();
    useLayoutEffect(() => {
        gsap.fromTo(boxRef.current, 
            {rotation: 0},
            {rotation: "+=360", duration: 3, scrollTrigger: {trigger: boxRef.current}})
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
            <FadeInTech1 stagger={0.1} x={0} ref={animationTech1}>
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
            </FadeInTech1>
            <FadeInTech2 stagger={5} x={0} ref={animationTech2}>
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
            </FadeInTech2>
            <FadeInTech3 stagger={0.1} x={0} ref={animationTech3}>
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
            </FadeInTech3>
            <div className="moreStuff">c</div>
      </Box>
    )
}