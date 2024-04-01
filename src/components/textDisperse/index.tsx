import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { disperse } from './animation';


interface TextDipserseProps {
  children: React.ReactElement<any>;
  setBackground: (value: boolean) => void;
  styles?: string;
  link?: string;
}

const TextDipserse: React.FC<TextDipserseProps> = ({ children, setBackground, styles, link }) => {
  const [isAnimated, setIsAnimated] = useState<boolean>(false);

  const getChars = (element: React.ReactElement): JSX.Element[] => {
    let chars: JSX.Element[] = [];
    if (React.Children.count(children) > 1) {
      React.Children.forEach(children, (el, i) => {
        chars.push(...splitWord((el as React.ReactElement).props.children, i));
      });
    } else {
      chars.push(...splitWord((element as React.ReactElement).props.children, 1));
    }
    return chars;
  };

  const splitWord = (word: string, indexOfWord: number): JSX.Element[] => {
    let chars: JSX.Element[] = [];
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          custom={indexOfWord * i}
          variants={disperse}
          animate={isAnimated ? "open" : "closed"}
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  const manageMouseEnter = (): void => {
    setBackground(true);
    setIsAnimated(true);
  };

  const manageMouseLeave = (): void => {
    setBackground(false);
    setIsAnimated(false);
  };

  return (
    <div
      style={{ cursor: "pointer" }}
      onMouseEnter={manageMouseEnter}
      onMouseLeave={manageMouseLeave}
      className={styles}
      onClick={() => window.open(link, "_blank")}
    >
      {getChars(children)}
    </div>
  );
};

export default TextDipserse;
