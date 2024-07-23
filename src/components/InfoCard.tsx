import React from 'react';
import '../styles/App.css';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import useInView from '../hooks/useInView';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface CardProps {
    src: IconDefinition;
    heading: string;
    description?: string;
    alt?: string;
}

const InfoCard: React.FC<CardProps> = ( props : CardProps ) => {
    const [ref, inView] = useInView({ threshold: 0.1 });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5 }}
        >
            <div className='card-container'>
                <FontAwesomeIcon icon={props.src} color="#DC5F00" className="card-image"/>
                <h1 className='card-heading secondary-color'>{props.heading}</h1>
                <p className='card-subheading'>{props.description}</p>
            </div>
        </motion.div>
    );
};
  
export default InfoCard;