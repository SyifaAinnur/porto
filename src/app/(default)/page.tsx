"use client";

import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preload from '@/components/preload';
import Landing from '@/components/landing';
import Description from '@/components/description';
import Project from '@/components/projects';

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
        {!isLoading &&<Landing />}
        <Description />
        <Project />
    </main>
  );
}