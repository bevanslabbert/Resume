import React from 'react';
import '../styles/App.css';
import useInView from '../hooks/useInView';
import { motion } from 'framer-motion';

interface ParagraphProps {
    text: string
}

const Paragraph: React.FC<ParagraphProps> = (props: ParagraphProps) => {
    const [ref, inView] = useInView({ threshold: 0.1 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 0.5 }}
        >
            <p className='sub-text'>{props.text}</p>
        </motion.div>
    );
};
  
export default Paragraph;