import React from 'react';
import '../styles/App.css';
import {  } from 'react-bootstrap';
import { motion } from 'framer-motion';
import useInView from '../hooks/useInView';
import { faCheck, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ActionButton from './ActionButton';
import { Link, useLocation, useNavigate } from "react-router-dom";

interface text {
    regular: string;
    bold?: string;
}

interface PillProps {
    heading: string;
    price: string;
    points: text[];
    plan: string;
}

const TickBoxPill: React.FC<PillProps> = ( props : PillProps ) => {
    const [ref, inView] = useInView({ threshold: 0.1 });

    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = () => {

        navigate('/enquire', {
            state: {
                plan: props.heading,
                package: props.plan
            }
        });
    }
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5 }}
        >
            <div className='tickbox-pill-container' onClick={handleNavigation}>
                <div className="tickbox-pill-header">
                    <h1 className='tickbox-pill-heading'>{props.heading}</h1>
                    <p className='tickbox-pill-price'>{props.price}</p>
                </div>
                <div className="tickbox-pill-points">
                    {props.points.map((item, index) => (
                        <div className="tickbox">
                            <FontAwesomeIcon icon={faCheck} color="#DC5F00" className="small-margin-right"/>
                                {/* Bold should be first */
                                item.bold ?
                                    item.bold[item.bold.length - 1] === ' ' ? 
                                        <p className="tickbox-text"><strong>{item.bold}</strong>{item.regular}</p>
                                    :
                                    /* Bold should be second */
                                        <p className="tickbox-text">{item.regular}<strong>{item.bold}</strong></p>
                                : <p className="tickbox-text">{item.regular}</p>
                                }
                        </div>
                    ))}
                </div>
                <div className="tickbox-vertical-action-button">
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>
        </motion.div>
    );
};
  
export default TickBoxPill;