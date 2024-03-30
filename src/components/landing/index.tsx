

import { motion } from 'framer-motion';
import styles from './style.module.scss';
import { translate } from '../header/animation';

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
            <div className='flex items-center justify-center'>
                <div className={styles.slider}>
                    {text.map((t, i) => {
                        return <motion.p
                        animate={'open'} >
                            {getChars(t)}
                        </motion.p>
                    })}
                </div>
            </div>

        </div>
    )
}