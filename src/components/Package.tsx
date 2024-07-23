import React from 'react';
import '../styles/App.css';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import useInView from '../hooks/useInView';
import { faChevronRight, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import ActionButton from './ActionButton';

interface PackageProps {
    src: IconDefinition;
    heading: string;
    description?: string;
    alt?: string;
    pageLink: string;
}

const Package: React.FC<PackageProps> = ( props : PackageProps ) => {
    const [ref, inView] = useInView({ threshold: 0.1 });

    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(props.pageLink);
    }

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5 }}
        >
            <div className='package-container' onClick={handleNavigation}>
                <FontAwesomeIcon icon={props.src} color="#DC5F00" className="package-image"/>
                <div className="package-info">
                    <h1 className='package-heading'>{props.heading}</h1>
                    <p className='package-subheading'>{props.description}</p>
                </div>
                <div className="vertical-action-button">
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
                <div className='package-action'>
                    <ActionButton text='View'/>
                </div>
            </div>
        </motion.div>
    );
};
  
export default Package;