'use client';
import React from 'react'
import styles from './style.module.scss';

interface ProjectsProps {
    index: number;
    title: string;
    manageModal: (value: boolean, index: number, x: number, y: number) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ index, title, manageModal }) => {

    return (
        <div onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}} className={styles.project}>
            <h2>{title}</h2>
            <p>Development</p>
        </div>
    )
}
