import React from 'react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Magnetic from '../Magnetic';
import styles from '@/components/common/RoundedButton/style.module.scss';

interface RoundedButtonProps {
    children: React.ReactNode;
    backgroundColor?: string;
    attributes?: React.HTMLAttributes<HTMLDivElement>;
    className?: string; 
}

export default function RoundedButton({ children, backgroundColor = "#455CE9", className, ...attributes }: RoundedButtonProps) {
    const circle = useRef<HTMLDivElement>(null);
    let timeline: any = useRef(null);
    let timeoutId: any = null;

    useEffect(() => {
        timeline.current = gsap.timeline({ paused: true });
        timeline.current
            .to(circle.current, { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" }, "enter")
            .to(circle.current, { top: "-150%", width: "125%", duration: 0.25 }, "exit");
    }, []);

    const manageMouseEnter = () => {
        if (timeoutId) clearTimeout(timeoutId);
        timeline.current.tweenFromTo('enter', 'exit');
    };

    const manageMouseLeave = () => {
        timeoutId = setTimeout(() => {
            timeline.current.play();
        }, 300);
    };

    return (
        <Magnetic>
            <div className={`${styles.roundedButton} ${className}`} style={{ overflow: "hidden" }} onMouseEnter={manageMouseEnter} onMouseLeave={manageMouseLeave} {...attributes}>
                {children}
                <div ref={circle} style={{ backgroundColor }} className={styles.circle}></div>
            </div>
        </Magnetic>
    );
}
