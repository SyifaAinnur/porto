import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { opacity, slideUp } from "./animation";
import styles from './style.module.scss';
import RoundedButton from "../common/RoundedButton";

export default function Description() {

    const phrase = "Develop a website/mobile that is not only beautiful but also functional and user-friendly.";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                    {
                        phrase.split(" ").map((word, index) => {
                            return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                        })
                    }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
                    I am a frontend developer with a passion for creating beautiful and functional websites. I am always looking for new challenges and opportunities to learn and grow. 
                </motion.p>
            </div>
        </div>
    )
}