import React from 'react';
import '../styles/App.css';
import useInView from '../hooks/useInView';
import { motion } from "framer-motion"

interface ContainerProps {
    heading: string;
    subheading: string;
    src: string;
}

const Heading: React.FC<ContainerProps> = ( props : ContainerProps ) => {
    const [ref, inView] = useInView({ threshold: 0.1 });

    return (
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ duration: 0.5 }}
            >
                <div className="image-container large-margin-bottom">
                    <div className="image-container-text">
                        <h1>{props.heading}</h1>
                        <p>{props.subheading}</p>
                    </div>
                    <div className="image-container-image"></div>
                </div>
            </motion.div>
    );
};

export default Heading;