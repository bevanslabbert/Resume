import React from 'react';
import '../styles/App.css';
import useInView from '../hooks/useInView';
import { motion } from "framer-motion"
interface HeadingProps {
    text: string;
}
const Heading: React.FC<HeadingProps> = ( props : HeadingProps ) => {
    const [ref, inView] = useInView({ threshold: 0.1 });

    return (
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ duration: 0.5 }}
            >
                <div className="heading">
                    <p>{props.text}</p>
                </div>
            </motion.div>
    );
};

export default Heading;