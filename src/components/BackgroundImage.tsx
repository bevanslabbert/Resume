import React from 'react';
import '../styles/App.css';
import { motion } from 'framer-motion';
import useInView from '../hooks/useInView';
import WhiteHeading from './WhiteHeading';
import Heading from './Heading';
import Typewriter from './Typewriter';
import Paragraph from './Paragraph';

interface ImageProps {
    src: string;
    heading?: string;
    description?: string;
    alt?: string;
    texts?: string[];
}

const BackgroundImage: React.FC<ImageProps> = ( imageProps : ImageProps ) => {
    const [ref, inView] = useInView({ threshold: 0.1 });
    return (
        
            <div className="image-container">
                <img className="background-image" src={imageProps.src} alt={imageProps.alt ? imageProps.alt : "Background Image"}/>
                <div className='text-container'>
                    <Heading text="Bevan Slabbert" />
                    {imageProps.description ? 
                        <Paragraph text={imageProps.description} />
                    : null}
                </div>
            </div>
    );
};
  
export default BackgroundImage;