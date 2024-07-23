import React, { useEffect, useRef, useState } from 'react';
import '../styles/App.css';
import Header from '../components/Header';
import BackgroundImage from '../components/BackgroundImage';
import bench from "../common/images/image.jpg";
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import { faCss3, faHtml5, faJs, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faBowlFood, faCarrot, faCheckDouble, faClock, faDumbbell, faPlus, faTableCells, faVideo, faWeight } from '@fortawesome/free-solid-svg-icons';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from '@mui/material/Typography';
import WhiteHeading from '../components/WhiteHeading';
import Package from '../components/Package';
import profile from '../common/images/profile.png';

interface HomeProps {
    accordionSx: any;
}

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

const texts = ["bevan slabbert", "full-stack developer", "technical consultant", "software engineer"];

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

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    return (
        <div className='home-container'>
            <Header texts={texts} whatWeOfferNav={handleNavToWhatWeOffer} packagesNav={handleNavToPackages} faqsNav={handleNavToFaqs} navBack={false}/>
            <BackgroundImage src={profile} texts={texts} description='Passionate and driven Software Developer with approximately 2 years of professional experience in designing, developing, and deploying software solutions. Currently pursuing an Honours degree in Computer Science, which has further honed my technical skills and deepened my understanding of advanced computing concepts. Adept at problem-solving, writing clean and efficient code, and collaborating effectively in team environments. Eager to leverage my education and hands-on experience to contribute to innovative projects and drive technological advancements.'/>
            <div ref={whatWeOfferDivRef} className="container">
                <Heading text="Skills" />
                <div className="skills-container">
                </div>
            </div>
            <div ref={packagesDivRef} className='container'>
                <Heading text="Education"/>
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
        </div>
    );
};

export default Home;