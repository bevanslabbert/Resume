import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import useInView from '../hooks/useInView';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGit, faGithub, faHtml5, faJava, faJs, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faC, faCode } from '@fortawesome/free-solid-svg-icons';

const itemSx ={
}

export default function TimelineComponent() {
    const [ref, inView] = useInView({ threshold: 0.1 });

  return (
   
        <Timeline position="left">
            
            <TimelineItem sx={itemSx}>
                <TimelineOppositeContent color="text.secondary">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
                    transition={{ duration: 0.5 }}>
                    <div className='timeline-secondary-text'>
                        <div className='timeline-date-text'>
                            <b>2015 - 2019</b><br />
                            <div style={{fontSize: '0.8rem'}}>
                                85%+ average<br />
                                Math <br />
                                Physics <br />
                                Information Technology
                            </div>
                        </div>
                        <div className='education-icons'>
                        </div>
                    </div>
                </motion.div>

                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <div style={{height: 'auto', fontSize: '1.5rem', paddingRight: '2rem', paddingBottom: '5rem'}}>
                        <b>National Senior Certificate</b>
                        <br/>High School Delmas
                    </div>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                    <div className='timeline-secondary-text'>
                        <div className='timeline-date-text'>
                            <b>2020 - 2022</b><br />
                            <div style={{fontSize: '0.8rem'}}>
                                70%+ average<br />
                                Artificial intelligence <br />
                                databases <br />
                                object oriented programming
                            </div>
                        </div>
                        <div className='education-icons'>
                            <FontAwesomeIcon className="hover-icon" icon={faHtml5} fontSize="1.5rem" color='var(--secondary-color)'/>
                            <FontAwesomeIcon className="hover-icon" icon={faCss3} fontSize="1.5rem" color='var(--secondary-color)'/>
                            <FontAwesomeIcon className="hover-icon" icon={faJsSquare} fontSize="1.5rem" color='var(--secondary-color)'/>
                            <FontAwesomeIcon className="hover-icon" icon={faC} fontSize="1.5rem" color='var(--secondary-color)'/>
                            <FontAwesomeIcon className="hover-icon" icon={faGithub} fontSize="1.5rem" color='var(--secondary-color)'/>
                            <FontAwesomeIcon className="hover-icon" icon={faJava} fontSize="1.5rem" color='var(--secondary-color)'/>
                            
                        </div>
                    </div>
                </motion.div>
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <div style={{height: 'auto', fontSize: '1.5rem', paddingRight: '2rem', paddingBottom: '5rem'}}>
                        <b>BSc. Computer Science</b>
                        <br/>University of Pretoria
                    </div>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                    <div className='timeline-secondary-text'>
                            <div className='timeline-date-text'>
                                <b>2023 - current</b><br />
                                <div style={{fontSize: '0.8rem'}}>
                                    70%+ average<br />
                                    Neural Networks <br />
                                    Genetic Programming <br />
                                    Data Science
                                </div>
                            </div>
                            <div className='education-icons'>
                                <FontAwesomeIcon className="hover-icon" icon={faPython} fontSize="1.5rem" color='var(--secondary-color)'/>
                                <FontAwesomeIcon className="hover-icon" icon={faJava} fontSize="1.5rem" color='var(--secondary-color)'/>
                                <FontAwesomeIcon className="hover-icon" icon={faJsSquare} fontSize="1.5rem" color='var(--secondary-color)'/>
                                <FontAwesomeIcon className="hover-icon" icon={faAngular} fontSize="1.5rem" color='var(--secondary-color)'/>
                                <FontAwesomeIcon className="hover-icon" icon={faReact} fontSize="1.5rem" color='var(--secondary-color)'/>
                                <FontAwesomeIcon className="hover-icon" icon={faGit} fontSize="1.5rem" color='var(--secondary-color)'/>
                            </div>
                        </div>
                    </motion.div>
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <div style={{height: 'auto', fontSize: '1.5rem', paddingRight: '2rem', paddingBottom: '5rem'}}>
                        <b>BScHons. Computer Science</b>
                        <br/>University of Pretoria
                    </div>
                </TimelineContent>
            </TimelineItem>
        </Timeline>

  );
}