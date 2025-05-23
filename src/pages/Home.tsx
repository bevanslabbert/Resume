import React, { useRef } from 'react';
import '../styles/App.css';
import Header from '../components/Header';
import BackgroundImage from '../components/BackgroundImage';
import Heading from '../components/Heading';
import { faPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from '@mui/material/Typography';
import profile from '../common/images/head.png';
import TimelineComponent from '../components/Timeline';

interface HomeProps {
    accordionSx: any;
}

const experience = [
    {
        job: "Technical Consultant Internship",
        date: "January 2023 - November 2023",
        responsibilities: [
            "Developed internal full-stack applications. Applications were complete with front-end developed in SAP UI5 (JavaScript/TypeScript framework for SAP applications) and backend developed in Express JS", 
            "Developed basic internal ABAP applications. Acquainted with the SAP BTP Cockpit",
            "Familiarized with containerized environments by deploying and managing applications on CloudFoundry using the CF CLI",
            "Built CI/CD pipelines in both SAP BTP and GitHub Actions for automated build, test and deployment of UI5 applications to Cloud Foundry"
        ]
    },
    {
        job: "Technical Consultant",
        date: "December 2023 - August 2024",
        responsibilities: [
            "Independently developed custom full-stack applications for clients – SAP UI5 frontend, ExpressJs backend", 
            "Developed and deployed enhancements for developed applications to fulfill business requirements",
            "Developed new features for existing client applications",
            "Client meetings and discussions regarding flow and logical design of custom business solutions",
            "Collaboration on large project developed in SAP UI5 and ExpressJs version controlled using GitHub",
        ]
    },
    {
        job: "Automation Software Engineer",
        date: "September 2024 - current",
        responsibilities: [
            "Built automation software for use with SAP EC and ECP",
            "Developed and deployed enhancements for developed applications to fulfill business requirements",
            "Designed architecture and flow of automation software integrating several different systems",
            "Built custom APIs for integration with systems to facilitate data transfer and automation",
            "Developed CI/CD pipelines in Github Actions for automated build, test and deployment of applications to AWS",
            "Experience with AWS services such as Kubernetes, EC2, S3 and Lambda",
            "Experience with UIPath, Ruby on Rails, Nest.JS and Python"
        ]
    }
]

const academicExperience = [
    {
        job: "bsc. computer science",
        date: "january 2020 - December 2022",
        responsibilities: [
            "Team-lead on final-year project: VoteVault. Application that utilizes blockchain storage and verification for a secure online voting system. Front-end developed on Ionic Angular", 
            "Artificial Intelligence and Machine Learning experience – neural networks, genetic programming and grammatical evolution development, testing and reporting",
            "Worked in a large team that colaborated on a single project - CI/CD using GitHub actions, GitHub for version control, documentation",
            "Built a fully functional compiler for a custom grammar using Java - custom code was analyzed for lexical, parsing and type errors. Code was then compiled to intermediate code and finally converted to BASIC for interpretation"
        ]
    },
    {
        job: "bsc hons. computer science",
        date: "january 2023 - december 2024",
        responsibilities: [
            "Neural network configuration, training, testing and result reporting. Parameter-optimization and cloud-computing to yield results", 
            "Designed and developed a fully functional genetic algorithm - enhancements to the base genetic programming model included structure based genetic programming features and grammatical evolution", 
            "Use of convolutional neural network libraries for image recognition",
            "Research was centered around interpolating unit detection of self organizing maps. Proposal of own algorithm for interpolating unit classification and identification",
        ]
    },
    {
        job: "msc. computer science",
        date: "january 2025 - current",
        responsibilities: [
            "Researching and developing a novel neural network architecture for the purpose of image synthesis and generation in the field of radio astronomy"
        ]
    }
]

const nonProfessionalExperience = [
    {
        job: "Personal Trainer Website",
        responsibilities: [
            "Website for advertising available packages to potential clients. Includes a sign-up form for automatically sending an email to the coach's peronal email address",
            "Designed in Figma",
            "Developed in ReactJs"
        ]
    },
    {
        job: "Pet product e-commerce mobile application",
        responsibilities: [
            "Application for ordering pet products on a mobile app",
            "Utilizes Google Maps API for distance-based delivery cost calculation",
            "Developed with Ionic Angular and Google Firebase"
        ]
    },
    {
        job: "Online Chess Bot",
        responsibilities: [
            "An online chess-playing bot that logs into an online chess platform and plays the next best move after analyzing the current state of the board",
            "Developed using Python Selenium and Stockfish API"
        ]
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
            <div ref={packagesDivRef} className='container'>
                <Heading text="Education"/>
                <div className="packages-container">
                   <TimelineComponent />
                </div>
            </div>
            <div ref={whatWeOfferDivRef} className="container dark-background">
                <Heading text="Experience" type="secondary"/>
                <div className='experience-container'>
                    {
                        experience.map((item) => (
                                <Accordion sx={accordionSx} square={true} className='large-padding-bottom'>
                                    <AccordionSummary
                                        expandIcon={
                                            <div>
                                                <FontAwesomeIcon className='mobile-accordion-icon' icon={faPlus} fontSize="0.8rem" color='var(--background-color)'/>
                                                <FontAwesomeIcon className='desktop-accordion-icon' icon={faPlus} fontSize="1rem" color='var(--background-color)'/>
                                            </div>
                                        }
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        {/* <Typography className="mobile-accordion-summary" fontSize="0.8rem" textAlign='left' width='90%' fontWeight="bold">{item.q}</Typography> */}
                                        <Typography className="desktop-accordion-summary" fontSize="1rem" textAlign='left' fontWeight="bold" >{item.job}<span style={{fontWeight: "normal"}}> , {item.date}</span></Typography>
                                       
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        {/* <Typography className="mobile-accordion-details" textAlign='left' fontSize="1rem" width="auto" paddingTop="1rem">{item.a}</Typography> */}
                                        <Typography className="desktop-accordion-details" textAlign='left' fontSize="0.9rem" paddingBottom="2rem">
                                            <div className='responsibilities'>
                                                {
                                                    item.responsibilities.map((resp) => (
                                                        <span style={{alignItems: "center", display: "flex", flexDirection: "row", padding: "0.5rem"}}><FontAwesomeIcon className="small-padding-right" icon={faStar} fontSize="0.5rem"/>{resp}</span>
                                                    ))
                                                }
                                            </div>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            )
                        )}
                </div>
                <br/>
                <br/>
                <Heading text="Academic Experience" type="secondary"/>
                <div className='experience-container'>
                    {
                        academicExperience.map((item) => (
                            <Accordion sx={accordionSx} square={true} className='large-padding-bottom'>
                            <AccordionSummary
                                expandIcon={
                                    <div>
                                        <FontAwesomeIcon className='mobile-accordion-icon' icon={faPlus} fontSize="0.8rem" color='var(--background-color)'/>
                                        <FontAwesomeIcon className='desktop-accordion-icon' icon={faPlus} fontSize="1rem" color='var(--background-color)'/>
                                    </div>
                                }
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                {/* <Typography className="mobile-accordion-summary" fontSize="0.8rem" textAlign='left' width='90%' fontWeight="bold">{item.q}</Typography> */}
                                <Typography className="desktop-accordion-summary" fontSize="1rem" textAlign='left' fontWeight="bold" >{item.job}<span style={{fontWeight: "normal"}}> , {item.date}</span></Typography>
                               
                            </AccordionSummary>
                            <AccordionDetails>
                                {/* <Typography className="mobile-accordion-details" textAlign='left' fontSize="1rem" width="auto" paddingTop="1rem">{item.a}</Typography> */}
                                <Typography className="desktop-accordion-details" textAlign='left' fontSize="0.9rem" paddingBottom="2rem">
                                    <div className='responsibilities'>
                                        {
                                            item.responsibilities.map((resp) => (
                                                <span style={{alignItems: "center", display: "flex", flexDirection: "row", padding: "0.5rem"}}><FontAwesomeIcon className="small-padding-right" icon={faStar} fontSize="0.5rem"/>{resp}</span>
                                            ))
                                        }
                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                            )
                        )}
                </div>
                <br/>
                <br/>
                <Heading text="Non-professional Experience" type="secondary"/>
                <div className='experience-container'>
                    {
                        nonProfessionalExperience.map((item) => (
                            <Accordion sx={accordionSx} square={true} className='large-padding-bottom'>
                            <AccordionSummary
                                expandIcon={
                                    <div>
                                        <FontAwesomeIcon className='mobile-accordion-icon' icon={faPlus} fontSize="0.8rem" color='var(--background-color)'/>
                                        <FontAwesomeIcon className='desktop-accordion-icon' icon={faPlus} fontSize="1rem" color='var(--background-color)'/>
                                    </div>
                                }
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                {/* <Typography className="mobile-accordion-summary" fontSize="0.8rem" textAlign='left' width='90%' fontWeight="bold">{item.q}</Typography> */}
                                <Typography className="desktop-accordion-summary" fontSize="1rem" textAlign='left' fontWeight="bold" >{item.job}<span style={{fontWeight: "normal"}}></span></Typography>
                               
                            </AccordionSummary>
                            <AccordionDetails>
                                {/* <Typography className="mobile-accordion-details" textAlign='left' fontSize="1rem" width="auto" paddingTop="1rem">{item.a}</Typography> */}
                                <Typography className="desktop-accordion-details" textAlign='left' fontSize="0.9rem" paddingBottom="2rem">
                                    <div className='responsibilities'>
                                        {
                                            item.responsibilities.map((resp) => (
                                                <span style={{alignItems: "center", display: "flex", flexDirection: "row", padding: "0.5rem"}}><FontAwesomeIcon className="small-padding-right" icon={faStar} fontSize="0.5rem"/>{resp}</span>
                                            ))
                                        }
                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                            )
                        )}
                </div>
            </div>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" className='fill-tertiary'>
                <path d="M1000 100C500 100 500 4 0 4V0h1000v100Z"></path>
            </svg> */}
            {/* <div ref={faqsDivRef} className="container">
                <Heading text="Skills" />
                <div className="skills-container">
                </div>
            </div> */}
        </div>
    );
};

export default Home;