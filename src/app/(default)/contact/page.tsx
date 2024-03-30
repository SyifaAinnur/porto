'use client';

import TextDisperse from '@/components/textDisperse';
import styles from './style.module.scss';
import { useRef } from 'react';

export default function Contact() {
    const background = useRef(null);

    const setBackground = (isActive: any) => {
        gsap.to(background.current, { opacity: isActive ? 0.8 : 0 })
    }

    return (
        <main className={styles.main}>
            <div className={styles.body}>

                <div className={styles.introLine}>
                    <p>Olivier</p>
                    <p>Larose</p>
                </div>

                <div className={styles.introLine}>
                    <p>Design</p>
                    <p>&</p>
                </div>

                <div className={styles.introLine}>
                    <p>Art</p>
                    <p>Direction</p>
                </div>

                <TextDisperse setBackground={setBackground}>
                    <p>+447533063596</p>
                </TextDisperse>

                <TextDisperse setBackground={setBackground}>
                    <p>→Email</p>
                </TextDisperse>

                <TextDisperse setBackground={setBackground}>
                    <p>→Insta</p>
                </TextDisperse>

            </div>
            <div ref={background} className={styles.background}></div>
        </main>
    )
}