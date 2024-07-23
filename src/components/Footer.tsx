import React from 'react';
import '../styles/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {

    const navigateInstagram = () => {
        
    }

    const navigateFacebook = () => {
        
    }

    return (
        <div className='footer-container'>
            <div className='footer'>
                <div className="footer-a medium-padding">
                    <div className='footer-icon small-padding-left'>
                        <FontAwesomeIcon icon={faDumbbell} color="#DC5F00" fontSize="1.5rem" className='tiny-margin-right'/>
                        <h1>Limit Breaker Strength</h1>
                    </div>
                </div>
                <div className="footer-b">
                    <h2>Contact us</h2>
                </div>
            </div>
            <div className='socials medium-margin-left medium-margin-right small-padding-top small-padding-bottom'>
                <div className="icons">
                    <FontAwesomeIcon onClick={navigateInstagram} icon={faInstagram} className='social-icon small-margin-right'/>
                    <FontAwesomeIcon onClick={navigateFacebook} icon={faFacebook} className='social-icon'/>
                </div>
                <h2 className='tiny-font'>2024, Limit Breaker Strength</h2>
            </div>
        </div>
    );
};
    
export default Footer;