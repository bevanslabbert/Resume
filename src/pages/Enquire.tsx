import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import useInView from '../hooks/useInView';
import { motion } from 'framer-motion';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import ActionButton from '../components/ActionButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForumbee, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCheckCircle, faCheckDouble, faCoins, faHandPaper, faMoneyBill, faNewspaper, faPen, faSmileBeam } from '@fortawesome/free-solid-svg-icons';

const CustomTextField = styled(TextField)`
    & label.Mui-focused {
        color: var(--secondary-color);
    }
    & .MuiOutlinedInput-root {
        &.Mui-focused fieldset {
            border-color: var(--secondary-color);
        }
    }
    & .MuiFormLabel-root {
        font-size: 1rem;
    }
`;

const texts = ["bevan slabbert", "full-stack developer", "technical consultant", "software engineer"];

const Enquire: React.FC<any> = (props: any) => {
    const location = useLocation();
    const { state } = location;
    const plan = state?.plan ?? "";
    const packageType = state?.package ?? "";

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Validation and values
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState(false);
    const [nameErrorText, setNameErrorText] = useState("");
    const handleNameChange = (e: any) => {
        const value = e.target.value;
        setName(value);
        if (value.trim() === "") {
            setNameError(true);
            setNameErrorText("Name is required.");
        } else {
            setNameError(false);
            setNameErrorText("");
        }
    };

    const [surname, setSurname] = useState("");
    const [surnameError, setSurnameError] = useState(false);
    const [surnameErrorText, setSurnameErrorText] = useState("");
    const handleSurnameChange = (e: any) => {
        const value = e.target.value;
        setSurname(value);
        if (value.trim() === "") {
            setSurnameError(true);
            setSurnameErrorText("Surname is required.");
        } else {
            setSurnameError(false);
            setSurnameErrorText("");
        }
    };

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [emailErrorText, setEmailErrorText] = useState("");
    const handleEmailChange = (e: any) => {
        const value = e.target.value;
        setEmail(value);
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(value)) {
            setEmailError(true);
            setEmailErrorText("Invalid email address.");
        } else {
            setEmailError(false);
            setEmailErrorText("");
        }
    };

    const [phone, setPhone] = useState("");
    const [phoneError, setPhoneError] = useState(false);
    const [phoneErrorText, setPhoneErrorText] = useState("");
    const handlePhoneChange = (e: any) => {
        const value = e.target.value;
        setPhone(value);
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(value)) {
            setPhoneError(true);
            setPhoneErrorText("Invalid phone number.");
        } else {
            setPhoneError(false);
            setPhoneErrorText("");
        }
    };

    const [message, setMessage] = useState("");
    const [messageError, setMessageError] = useState(false);
    const handleMessageChange = (e: any) => {
        setMessage(e.target.value);
        setEmail(`mailto:bevanslabbert@gmail.com?body=${encodeURIComponent(e.target.value)}`)
    };

    const sendEmail = () => {
        
    }

    const [ref, inView] = useInView({ threshold: 0.1 });
    return (
        <div className='enquire-container'>
            <Header texts={texts} navBack={true}/>
            <div className='enquire-main large-padding-bottom'>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className='enquire-card'>
                        <div className='enquire-form medium-padding-left medium-padding-right medium-padding-bottom'>
                            <p className="tickbox-card-heading">Contact Me</p>
                            {/* <CustomTextField id="outlined-basic" value={name} onChange={handleNameChange} helperText={nameErrorText} error={nameError} autoFocus required label="Name" variant="outlined" inputProps={{style: {fontSize: "0.9rem"}}} sx={{ mb: "2rem"}} size="medium" fullWidth={true}/>
                            <CustomTextField id="outlined-basic" value={surname} onChange={handleSurnameChange} helperText={surnameErrorText} error={surnameError} required label="Surname" variant="outlined" inputProps={{style: {fontSize: "0.9rem"}}} sx={{ mb: "2rem" }} size="medium" fullWidth={true}/> */}
                            {/* <CustomTextField id="outlined-basic" value={email} onChange={handleEmailChange} helperText={emailErrorText} error={emailError} required label="Email" variant="outlined" inputProps={{style: {fontSize: "0.9rem"}}} sx={{ mb: "2rem" }} size="medium" fullWidth={true}/> */}
                            {/* <CustomTextField id="outlined-basic" value={phone} onChange={handlePhoneChange} helperText={phoneErrorText} error={phoneError} required label="Phone Number" variant="outlined" inputProps={{style: {fontSize: "0.8rem"}}} sx={{ mb: "2rem" }} size="small" fullWidth={true}/> */}
                            <CustomTextField id="outlined-basic" multiline rows={4} value={message} onChange={handleMessageChange} label="Message" variant="outlined" inputProps={{style: {fontSize: "1rem"}}} sx={{ mb: "0.9rem" }} size="medium" fullWidth={true}/>
                            <div className="medium-margin-top">
                            <a href={email}>
                                <ActionButton onPressFunction={sendEmail} text="Submit"/>
                            </a>
                            </div>
                        </div>
                        <div className='enquire-card-info'>
                            <h1 className='enquire-card-info-heading'>Get in touch</h1>
                            <div className='enquire-steps'>
                                <div className='enquire-step'>
                                    <FontAwesomeIcon fontSize="1.5rem" icon={faPen} className='small-margin-right'/><p>Fill in this form</p>
                                </div>
                                <div className='enquire-step'>
                                    <FontAwesomeIcon fontSize="1.5rem" icon={faCheckCircle} className='small-margin-right'/><p>Click submit to send me an email</p>
                                </div>
                                <div className='enquire-step'>
                                    <FontAwesomeIcon fontSize="1.5rem" icon={faSmileBeam} className='small-margin-right'/><p>Thank you for your time</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
        
    );
};
  
export default Enquire;