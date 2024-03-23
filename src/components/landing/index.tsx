"use client"

import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { slideUp, translate } from './animation';
import { motion } from 'framer-motion';
import styles from './style.module.scss';

export default function Landing() {

    // const slider = useRef(null);
    // let xPercent = 0;
    // let direction = -1;

    // useLayoutEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);
    //     gsap.to(slider.current, {
    //         scrollTrigger: {
    //             trigger: document.documentElement,
    //             scrub: 0.25,
    //             start: 0,
    //             end: window.innerHeight,
    //             onUpdate: e => direction = e.direction * -1
    //         },
    //         x: "-500px",
    //     })
    // }, [])

    const text = ["Frontend", "Mobile", "Website", "Developers"];


    const getChars = (word: string) => {
        let chars: JSX.Element[] = [];
        word.split("").forEach((char, i) => {
            chars.push(
                <motion.span
                    custom={[i * 0.02, (word.length - i) * 0.01]}
                    variants={translate} initial="initial"
                    animate="enter"
                    exit="exit"
                    key={char + i}>
                    {char}
                </motion.span>
            )
        })
        return chars;
    }

    return (
        <div className={styles.landing}>
            <div className={styles.sliderContainer}>
                <div className={styles.slider}>
                    {/* <p>Frontend</p>
                    <p>Mobile <br />Website</p>
                    <p>Developers</p> */}
                    {text.map((t, i) => {
                        return <motion.p>
                            {getChars(t)}
                        </motion.p>
                    })}
                </div>
            </div>

        </div>
    )
}