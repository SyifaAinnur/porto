import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { disperse } from './animation';

interface TextDisperseProps {
  children: React.ReactNode;
  setBackground: (background: boolean) => void;
}

export default function TextDisperse({ children, setBackground }: TextDisperseProps) {
    const [isAnimated, setIsAnimated] = useState(false);
  
    const getChars = (elements: React.ReactNode) => {
      let chars: JSX.Element[] = [];
      if (Array.isArray(elements)) {
        elements.forEach((element: React.ReactElement, i: number) => {
          if (typeof element.props.children === 'string') {
            chars.push(...splitWord(element.props.children as string, i));
          }
        });
      }
      else {
        if (typeof elements === 'string') {
          chars.push(...splitWord(elements as string, 1));
        }
      }
      return chars;
    }
  
    const splitWord = (word: string, indexOfWord: number) => {
      let chars: JSX.Element[] = [];
      word.split("").forEach((char: string, i: number) => {
        chars.push(
          <motion.span custom={indexOfWord * i} variants={disperse} animate={isAnimated ? "open" : "closed"} key={char + i}>
            {char}
          </motion.span>
        );
      });
      return chars;
    }
  
    const manageMouseEnter = () => {
      setBackground(true);
      setIsAnimated(true);
    }
    const manageMouseLeave = () => {
      setBackground(false);
      setIsAnimated(false);
    }
  
    return (
      <div style={{ cursor: "pointer" }} onMouseEnter={manageMouseEnter} onMouseLeave={manageMouseLeave}>
        {getChars(children)}
      </div>
    );
}
