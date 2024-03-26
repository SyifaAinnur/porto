import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './style.module.scss';
import { blur, translate } from '@/components/header/animation';
import { usePathname, useRouter } from 'next/navigation';

interface LinkData {
    title: string;
    href: string;
}

interface SelectedLink {
    isActive: boolean;
    index: number;
}

interface BodyProps {
    links: LinkData[];
    selectedLink: SelectedLink;
    setSelectedLink: React.Dispatch<React.SetStateAction<SelectedLink>>;
}

export default function Body({ links, selectedLink, setSelectedLink }: BodyProps) {

    const getChars = (word: string) => {
        let chars: JSX.Element[] = [];
        word.split("").forEach((char, i) => {
            chars.push(
                <motion.span
                    custom={[i * 0.02, (word.length - i) * 0.01]}
                    variants={translate} initial="initial"
                    animate="enter"
                    exit="exit"
                    key={char + i}>
                    {char}
                </motion.span>
            )
        })
        return chars;
    }
    const router = useRouter()
    const pathname = usePathname();

    return (
        <div className={styles.body}>
            {
                links.map((link, index) => {
                    const { title, href } = link;
                    return <Link key={`l_${index}`} href={href}>
                        <motion.p
                            onMouseOver={() => { setSelectedLink({ isActive: true, index }) }}
                            onMouseLeave={() => { setSelectedLink({ isActive: false, index }) }}
                            variants={blur}
                            animate={selectedLink.isActive && selectedLink.index !== index ? "open" : "closed"}
                            >
                            {getChars(title)}
                        </motion.p>
                    </Link>
                })
            }
        </div>
    )
}
