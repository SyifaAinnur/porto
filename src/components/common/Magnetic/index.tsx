import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface MagneticProps {
    children: React.ReactNode;
}

export default function Magnetic({ children }: MagneticProps) {
    const magnetic = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!magnetic.current) return;
            const { clientX, clientY } = e;
            const { height, width, left, top } = magnetic.current.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            gsap.to(magnetic.current, { x: x * 0.35, duration: 1, ease: "elastic.out(1, 0.3)" });
            gsap.to(magnetic.current, { y: y * 0.35, duration: 1, ease: "elastic.out(1, 0.3)" });
        };

        const handleMouseLeave = () => {
            if (!magnetic.current) return;
            gsap.to(magnetic.current, { x: 0, y: 0, duration: 1, ease: "elastic.out(1, 0.3)" });
        };

        if (magnetic.current) {
            magnetic.current.addEventListener("mousemove", handleMouseMove);
            magnetic.current.addEventListener("mouseleave", handleMouseLeave);
        }

        return () => {
            if (magnetic.current) {
                magnetic.current.removeEventListener("mousemove", handleMouseMove);
                magnetic.current.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, []);

    return React.cloneElement(children as React.ReactElement, { ref: magnetic });
}
