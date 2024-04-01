'use client';
import styles from './style.module.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { opacity, background } from './animation';
import Nav from '@/components/header/nav';
import { usePathname, useRouter } from 'next/navigation';
import { animatePageIn, animatePageOut } from '@/utils/animation';


export default function index() {

    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname()
    const router = useRouter();

    useEffect(() => {
        if (pathname) {
            setIsActive(false)
            setTimeout(() => {
                animatePageIn();
            }, 500)
        }
    }, [pathname])

    return (
        <div className={styles.header}>
            <div className={styles.bar}>
                <Link href="/">Siff</Link>
                <div onClick={() => {setIsActive(!isActive)}} className={styles.el}>
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                    <div className={styles.label}>
                        <motion.p variants={opacity} animate={!isActive ? "open" : "closed"}>Menu</motion.p>
                        <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>Close</motion.p>
                    </div>
                </div>
            </div>
            <motion.div variants={background} initial="initial" animate={isActive ? "open" : "closed"} className={styles.background}></motion.div>
            <AnimatePresence mode="wait">
                {isActive && <Nav/>}
            </AnimatePresence>
        </div>
    )
}