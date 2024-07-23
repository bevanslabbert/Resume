import React from 'react';
import '../styles/App.css';
import { motion } from 'framer-motion';
import useInView from '../hooks/useInView';
import ActionButton from './ActionButton';
import { Link } from "react-router-dom";

interface CardProps {
    src?: string;
    heading: string;
    description?: string;
    alt?: string;
    pageLink: string;
}

const GraphicCard: React.FC<CardProps> = ( props : CardProps ) => {
    const [ref, inView] = useInView({ threshold: 0.1 });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5 }}
        >
            <div className='graphic-card-container'>
                <img src={props.src} alt={props.alt} className='graphic-card-image'/>
                <div className='graphic-card-text-container'>
                    <h1 className='graphic-card-heading'>{props.heading}</h1>
                    <p className='graphic-card-subheading'>{props.description}</p>
                    <Link to={props.pageLink}><ActionButton text='View'/></Link>
                </div>
            </div>
        </motion.div>
    );
};

export default GraphicCard;