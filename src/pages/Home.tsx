import React, { useEffect, useRef, useState } from 'react';
import '../styles/App.css';
import Header from '../components/Header';
import BackgroundImage from '../components/BackgroundImage';
import bench from "../common/images/image.jpg";
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import InfoCard from '../components/InfoCard';
import GraphicCard from '../components/GraphicCard';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faBowlFood, faCarrot, faCheckDouble, faClock, faDumbbell, faPlus, faTableCells, faVideo, faWeight } from '@fortawesome/free-solid-svg-icons';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from '@mui/material/Typography';
import Footer from '../components/Footer';
import WhiteHeading from '../components/WhiteHeading';
import Package from '../components/Package';

interface HomeProps {
    accordionSx: any;
}

// const accordionSx = {
//     backgroundColor: 'black',
//     color: 'white',
//     // borderBottom: '0.1px solid white',
//     // borderRadius: '0px',
//     paddingBottom: '1rem',
//     paddingTop: '1rem',
//     transition: 'transform 0.1s ease-in-out',
//     '&:hover': {
//         transform: 'translateX(10px)',
//     }
// }

const faq = [
    {
        q: "What services do you offer?",
        a: "We offer personalized nutrition and training packages tailored to meet your individual goals."
    },
    {
        q: "How do I sign up for a package?",
        a: "You can sign up for a package through our website by selecting the package that suits you best and filling out the registration form."
    },
    {
        q: "What happens after I sign up?",
        a: "After you sign up, you will receive an email with further instructions on how to get started. This will include payment and filling out a detailed questionnaire about your goals and current health status."
    },
    {
        q: "What training programs do you offer?",
        a: "We offer a variety of training programs including weight loss, muscle building, powerlifting, and general fitness."
    },
    {
        q: "How can I contact my coach?",
        a: "You can contact your coach via email or WhatsApp. Your coach will provide you with their contact details during your initial consultation."
    },
    {
        q: "Can I cancel my package?",
        a: "Yes, you can cancel your package at any time. Packages are month-to-month and can be cancelled whenever you prefer."
    },
    {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards and bank transfers."
    }
]

const Home: React.FC<HomeProps> = ({ accordionSx }) => {
    const whatWeOfferDivRef = useRef<HTMLDivElement>(null);
    const packagesDivRef = useRef<HTMLDivElement>(null);
    const faqsDivRef = useRef<HTMLDivElement>(null);

    const handleNavToWhatWeOffer = () => {
        if (whatWeOfferDivRef.current)
            whatWeOfferDivRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    const handleNavToPackages = () => {
        if (packagesDivRef.current)
            packagesDivRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    const handleNavToFaqs = () => {
        if (faqsDivRef.current)
            faqsDivRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className='home-container'>
            <Header whatWeOfferNav={handleNavToWhatWeOffer} packagesNav={handleNavToPackages} faqsNav={handleNavToFaqs} navBack={false}/>
            <BackgroundImage src={bench} heading='Limit Breaker Strength' description='All inclusive powerlifting coaching'/>
            <div ref={whatWeOfferDivRef} className="full-height large-padding-bottom">
                <Paragraph text="Become the best and strongest version of yourself. Push the limits of known strength."/>
                <Heading text="What we offer" />
                <div className="offer-cards-container">
                    <InfoCard heading='24/7 WhatsApp Support' src={faWhatsapp} alt='whatsapp'
                            description='Direct communication with me on WhatsApp.'/>
                    <InfoCard heading='Personalised Programs' src={faTableCells} alt='program'
                            description='Programs personally crafted for your specific needs and goals.'/>
                    <InfoCard heading='Periodical Check-ins' src={faClock} alt='video'
                            description='Check-ins on a scheduled basis.'/>
                </div>
            </div>
            <div className="large-padding-bottom black-background full-height">
                <WhiteHeading text="Why choose us?"/>
                <p className="white-color line-space medium-padding-left medium-padding-right medium-padding-bottom">We
                    focus on the development of strong lifting technique and healthy eating habits. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Mollitia quas laudantium corrupti nisi. Voluptas perferendis,
                    eveniet eaque debitis, pariatur a, alias fugiat sequi perspiciatis odio ipsum animi quam nisi
                    eligendi.</p>
            </div>
            <div ref={packagesDivRef} className='medium-padding-bottom'>
                <Heading text="Packages"/>
                {/* <div className="graphic-cards-container">
                    <GraphicCard heading="Online Coaching" description="Training and technique" src={bench}
                                pageLink='coaching'/>
                    <GraphicCard heading="Online Nutrition" description="Diet and nutrition" src={bench}
                                pageLink='nutrition'/>
                    <GraphicCard heading="Online Coaching + Nutrition" description="Training and Nutrition" src={bench}
                                pageLink='coaching-and-nutrition'/>
                </div> */}
                <div className="packages-container">
                    <Package src={faDumbbell} pageLink='coaching' heading="Online Coaching" description='Training and technique package. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolorum quis in excepturi cum aliquam.' />
                    <Package src={faCarrot} pageLink='nutrition' heading="Online Nutrition" description='Diet and nutrition package. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolorum quis in excepturi cum aliquam.' />
                    <Package src={faCheckDouble} pageLink='coaching-and-nutrition' heading="Online Coaching + Nutrition" description='Training and Nutrition package. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolorum quis in excepturi cum aliquam.' />
                </div>
            </div>
            <div ref={faqsDivRef} className="medium-padding-top medium-padding-bottom black-background medium-margin-top">
                <WhiteHeading text="FAQ's"/>
                <div className='medium-margin-left medium-margin-right'>
                    {
                        faq.map((item) => (
                                <Accordion sx={accordionSx} square={true} className='large-padding-bottom'>
                                    <AccordionSummary
                                        expandIcon={
                                            <div>
                                                <FontAwesomeIcon className='mobile-accordion-icon' icon={faPlus} fontSize="1.5rem" color='#DC5F00'/>
                                                <FontAwesomeIcon className='desktop-accordion-icon' icon={faPlus} fontSize="2.5rem" color='#DC5F00'/>
                                            </div>
                                        }
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        <Typography className="mobile-accordion-summary" fontSize="1.2rem" textAlign='left' width='90%' fontWeight="bold">{item.q}</Typography>
                                        <Typography className="desktop-accordion-summary" fontSize="2rem" margin="auto" width='50%' textAlign='left' fontWeight="bold" >{item.q}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography className="mobile-accordion-details" textAlign='left' fontSize="1rem" width="auto" paddingTop="1rem">{item.a}</Typography>
                                        <Typography className="desktop-accordion-details" margin="auto" width='50%' textAlign='left' fontSize="1.2rem" paddingBottom="2rem">{item.a}</Typography>
                                    </AccordionDetails>
                                </Accordion>
                            )
                        )}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;