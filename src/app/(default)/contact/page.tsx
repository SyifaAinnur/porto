'use client';

import TextDisperse from '@/components/textDisperse';
import styles from './style.module.scss';
import { useRef } from 'react';
import gsap from 'gsap';

export default function Contact() {
    const background = useRef(null);

    const setBackground = (isActive: any) => {
        gsap?.to(background.current, { opacity: isActive ? 0.8 : 0 })
    }

    return (
        <main className={styles.main}>
            <div className={styles.body}>

                <div className={styles.introLine}>
                    <p>Syifa</p>
                    <p>Ainnur</p>
                </div>

                <div className={styles.introLine}>
                    <p>Frontend</p>
                    <p>Dev</p>
                </div>

                <div className={styles.introLine}>
                    <p>Website</p>
                    <p>&</p>
                    <p>Mobile</p>
                </div>

                <TextDisperse setBackground={setBackground} styles={styles.introLine} link='https://www.linkedin.com/in/syifaainnurmanzila/'>
                    <p>→Linkedin</p>
                </TextDisperse>

                <TextDisperse setBackground={setBackground} styles={styles.introLine} link='mailto:syifaainnurmanzila@gmail.com'>
                    <p>→Email</p>
                </TextDisperse>

                <TextDisperse setBackground={setBackground} styles={styles.introLine} link='https://github.com/SyifaAinnur'>
                    <p>→Github</p>
                </TextDisperse>

            </div>
            <div ref={background} className={styles.background}></div>
        </main>
    )
}