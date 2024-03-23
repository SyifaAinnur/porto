"use client";

import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preload from '@/components/preload';

export default function Home() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
      (
        async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default
            const locomotiveScroll = new LocomotiveScroll();
  
            setTimeout( () => {
              setIsLoading(false);
              document.body.style.cursor = 'default'
              window.scrollTo(0,0);
            }, 2000)
        }
      )()
    }, [])


  return (
    <main>
        <AnimatePresence mode='wait'>
            {isLoading && <Preload />}
        </AnimatePresence>
    </main>
  );
}