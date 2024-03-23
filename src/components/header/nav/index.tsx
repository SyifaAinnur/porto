'use client';
import styles from './style.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Body from './Body';
import { height } from '@/components/header/animation';

const links = [
    {
      title: "Home",
      href: "/",
      src: "home.png"
    },
    {
      title: "Shop",
      href: "/shop",
      src: "shop.png"
    },
    {
      title: "About Us",
      href: "/about",
      src: "home.png"
    },
    {
      title: "Lookbook",
      href: "/lookbook",
      src: "lookbook.png"
    },
    {
      title: "Contact",
      href: "/contact",
      src: "contact.png"
    }
  ]

  
export default function Index() {
  const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});

  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
        </div>
      </div>
    </motion.div>
  )
}