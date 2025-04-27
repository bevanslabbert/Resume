import React, { useRef } from 'react';
import '../styles/App.css';
import Header from '../components/Header';
import BackgroundImage from '../components/BackgroundImage';
import Heading from '../components/Heading';
import TimelineComponent from '../components/TimelineComponent';
import SkillsVisualization from '../components/SkillsVisualization';
import ProjectShowcase from '../components/ProjectShowcase';
import { faPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from '@mui/material/Typography';
import profile from '../common/images/head.png';

interface HomeProps {
    accordionSx: any;
}

const experience = [
    {
        job: "Technical Consultant",
        date: "December 2023 - Current",
        responsibilities: [
            "Independently developed custom full-stack applications for clients – SAP UI5 frontend, ExpressJs backend", 
            "Developed and deployed enhancements for developed applications to fulfill business requirements",
            "Developed new features for existing client applications",
            "Client meetings and discussions regarding flow and logical design of custom business solutions",
            "Collaboration on large project developed in SAP UI5 and ExpressJs version controlled using GitHub",
        ]
    },
    {
        job: "Technical Consultant Internship",
        date: "January 2023 - November 2023",
        responsibilities: [
            "Developed internal full-stack applications. Applications were complete with front-end developed in SAP UI5 (JavaScript/TypeScript framework for SAP applications) and backend developed in Express JS", 
            "Developed basic internal ABAP applications. Acquainted with the SAP BTP Cockpit",
            "Familiarized with containerized environments by deploying and managing applications on CloudFoundry using the CF CLI",
            "Built CI/CD pipelines in both SAP BTP and GitHub Actions for automated build, test and deployment of UI5 applications to Cloud Foundry"
        ]
    }
]

const academicExperience = [
    {
        job: "BSc Hons. Computer Science",
        date: "January 2023 - Current",
        responsibilities: [
            "Neural network configuration, training, testing and result reporting. Parameter-optimization and cloud-computing to yield results", 
            "Designed and developed a fully functional genetic algorithm - enhancements to the base genetic programming model included structure based genetic programming features and grammatical evolution", 
            "Use of convolutional neural network libraries for image recognition",
            "Research is centered around interpolating unit detection of self organizing maps - developed a self-organizing map library in python to interact with individual neurons and calculate inter-neuron distances. Proposal of own algorithm for interpolating unit classification and identification",
        ]
    },
    {
        job: "BSc Computer Science",
        date: "January 2020 - December 2022",
        responsibilities: [
            "Team-lead on final-year project: VoteVault. Application that utilizes blockchain storage and verification for a secure online voting system. Front-end developed on Ionic Angular", 
            "Artificial Intelligence and Machine Learning experience – neural networks, genetic programming and grammatical evolution development, testing and reporting",
            "Worked in a large team that collaborated on a single project - CI/CD using GitHub actions, GitHub for version control, documentation",
            "Built a fully functional compiler for a custom grammar using Java - custom code was analyzed for lexical, parsing and type errors. Code was then compiled to intermediate code and finally converted to BASIC for interpretation"
        ]
    }
]

const texts = ["bevan slabbert", "full-stack developer", "technical consultant", "software engineer"];

const Home: React.FC<HomeProps> = ({ accordionSx }) => {
    const educationRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);

    const handleNavToEducation = () => {
        if (educationRef.current)
            educationRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    const handleNavToExperience = () => {
        if (experienceRef.current)
            experienceRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    const handleNavToProjects = () => {
        if (projectsRef.current)
            projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    const handleNavToSkills = () => {
        if (skillsRef.current)
            skillsRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className='home-container'>
            <Header 
                texts={texts} 
                whatWeOfferNav={handleNavToExperience} 
                packagesNav={handleNavToEducation} 
                faqsNav={handleNavToProjects}
                skillsNav={handleNavToSkills} 
                navBack={false}
            />
            
            <BackgroundImage 
                src={profile} 
                texts={texts} 
                description='Passionate and driven Software Developer with approximately 2 years of professional experience in designing, developing, and deploying software solutions. Currently pursuing an Honours degree in Computer Science, which has further honed my technical skills and deepened my understanding of advanced computing concepts. Adept at problem-solving, writing clean and efficient code, and collaborating effectively in team environments. Eager to leverage my education and hands-on experience to contribute to innovative projects and drive technological advancements.'
            />
            
            <div ref={educationRef} className='container'>
                <Heading text="Education"/>
                <div className="packages-container">
                    <TimelineComponent />
                </div>
            </div>
            
            <div ref={experienceRef} className="container dark-background">
                <Heading text="Professional Experience" type="secondary"/>
                <div className='experience-container'>
                    {
                        experience.map((item, idx) => (
                            <Accordion key={`exp-${idx}`} sx={accordionSx} square={true} className='large-padding-bottom'>
                                <AccordionSummary
                                    expandIcon={
                                        <div>
                                            <FontAwesomeIcon className='mobile-accordion-icon' icon={faPlus} fontSize="0.8rem" color='var(--background-color)'/>
                                            <FontAwesomeIcon className='desktop-accordion-icon' icon={faPlus} fontSize="1rem" color='var(--background-color)'/>
                                        </div>
                                    }
                                    aria-controls={`panel-exp-${idx}-content`}
                                    id={`panel-exp-${idx}-header`}
                                >
                                    <Typography className="desktop-accordion-summary" fontSize="1rem" textAlign='left' fontWeight="bold">
                                        {item.job}<span style={{fontWeight: "normal"}}> , {item.date}</span>
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography className="desktop-accordion-details" textAlign='left' fontSize="0.9rem" paddingBottom="2rem">
                                        <div className='responsibilities'>
                                            {
                                                item.responsibilities.map((resp, respIdx) => (
                                                    <span key={`exp-${idx}-resp-${respIdx}`} style={{alignItems: "center", display: "flex", flexDirection: "row", padding: "0.5rem"}}>
                                                        <FontAwesomeIcon className="small-padding-right" icon={faStar} fontSize="0.5rem"/>{resp}
                                                    </span>
                                                ))
                                            }
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))
                    }
                </div>
                
                <br/>
                <br/>
                
                <Heading text="Academic Experience" type="secondary"/>
                <div className='experience-container'>
                    {
                        academicExperience.map((item, idx) => (
                            <Accordion key={`academic-${idx}`} sx={accordionSx} square={true} className='large-padding-bottom'>
                                <AccordionSummary
                                    expandIcon={
                                        <div>
                                            <FontAwesomeIcon className='mobile-accordion-icon' icon={faPlus} fontSize="0.8rem" color='var(--background-color)'/>
                                            <FontAwesomeIcon className='desktop-accordion-icon' icon={faPlus} fontSize="1rem" color='var(--background-color)'/>
                                        </div>
                                    }
                                    aria-controls={`panel-academic-${idx}-content`}
                                    id={`panel-academic-${idx}-header`}
                                >
                                    <Typography className="desktop-accordion-summary" fontSize="1rem" textAlign='left' fontWeight="bold">
                                        {item.job}<span style={{fontWeight: "normal"}}> , {item.date}</span>
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography className="desktop-accordion-details" textAlign='left' fontSize="0.9rem" paddingBottom="2rem">
                                        <div className='responsibilities'>
                                            {
                                                item.responsibilities.map((resp, respIdx) => (
                                                    <span key={`academic-${idx}-resp-${respIdx}`} style={{alignItems: "center", display: "flex", flexDirection: "row", padding: "0.5rem"}}>
                                                        <FontAwesomeIcon className="small-padding-right" icon={faStar} fontSize="0.5rem"/>{resp}
                                                    </span>
                                                ))
                                            }
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))
                    }
                </div>
            </div>
            
            <div ref={skillsRef} className="container">
                <Heading text="Skills"/>
                <div className="skills-container">
                    <SkillsVisualization />
                </div>
            </div>
            
            <div ref={projectsRef} className="container dark-background">
                <Heading text="Projects" type="secondary"/>
                <div className="projects-container">
                    <ProjectShowcase />
                </div>
            </div>
        </div>
    );
};

export default Home;