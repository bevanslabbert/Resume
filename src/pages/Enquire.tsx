import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import useInView from '../hooks/useInView';
import { motion } from 'framer-motion';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import ActionButton from '../components/ActionButton';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForumbee, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCoins, faHandPaper, faMoneyBill, faNewspaper } from '@fortawesome/free-solid-svg-icons';

const CustomTextField = styled(TextField)`
    & label.Mui-focused {
        color: #DC5F00;
    }
    & .MuiOutlinedInput-root {
        &.Mui-focused fieldset {
        border-color: #DC5F00;
        }
    }
    & .MuiFormLabel-root {
        font-size: 1.25rem;
    }
`;

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

    const [message, setMessage] = useState(plan && packageType ? `Hey there! I am interested in the ${plan} ${packageType} package.` : `Hey there! I want to sign up!`);
    const [messageError, setMessageError] = useState(false);
    const handleMessageChange = (e: any) => {
        setMessage(e.target.value);
    };

    const [ref, inView] = useInView({ threshold: 0.1 });
    return (
       
        <div className='enquire-container'>
            <Header navBack={true}/>
            <div className='enquire-main large-padding-bottom'>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className='enquire-card'>
                        <div className='enquire-form medium-padding-left medium-padding-right medium-padding-bottom'>
                            <p className="tickbox-card-heading">Sign Up</p>
                            <CustomTextField id="outlined-basic" value={name} onChange={handleNameChange} helperText={nameErrorText} error={nameError} autoFocus required label="Name" variant="outlined" inputProps={{style: {fontSize: "1.25rem"}}} sx={{ mb: "2rem"}} size="medium" fullWidth={true}/>
                            <CustomTextField id="outlined-basic" value={surname} onChange={handleSurnameChange} helperText={surnameErrorText} error={surnameError} required label="Surname" variant="outlined" inputProps={{style: {fontSize: "1.25rem"}}} sx={{ mb: "2rem" }} size="medium" fullWidth={true}/>
                            <CustomTextField id="outlined-basic" value={email} onChange={handleEmailChange} helperText={emailErrorText} error={emailError} required label="Email" variant="outlined" inputProps={{style: {fontSize: "1.25rem"}}} sx={{ mb: "2rem" }} size="medium" fullWidth={true}/>
                            {/* <CustomTextField id="outlined-basic" value={phone} onChange={handlePhoneChange} helperText={phoneErrorText} error={phoneError} required label="Phone Number" variant="outlined" inputProps={{style: {fontSize: "0.8rem"}}} sx={{ mb: "2rem" }} size="small" fullWidth={true}/> */}
                            <CustomTextField id="outlined-basic" multiline rows={4} value={message} onChange={handleMessageChange} label="Message" variant="outlined" inputProps={{style: {fontSize: "1rem"}}} sx={{ mb: "2rem" }} size="medium" fullWidth={true}/>
                            <div className="medium-margin-top">
                                <ActionButton text="Submit" />
                            </div>
                        </div>
                        <div className='enquire-card-info'>
                            <h1 className='enquire-card-info-heading'>Next steps</h1>
                            <div className='enquire-steps'>
                                <div className='enquire-step'>
                                    <FontAwesomeIcon fontSize="3rem" icon={faHandPaper} className='small-margin-right'/><p>Fill in this form to begin your fitness journey at Limit Breaker Strength.</p>
                                </div>
                                <div className='enquire-step'>
                                    <FontAwesomeIcon fontSize="3rem" icon={faCoins} className='small-margin-right'/><p>You will receive an email detailing payment information.</p>
                                </div>
                                <div className='enquire-step'>
                                    <FontAwesomeIcon fontSize="3rem" icon={faWhatsapp} className='small-margin-right'/><p>Upon completing payment, one of our coaches will be in contact with you via WhatsApp as soon as possible.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className='enquire-footer-container'>
                <Footer/>
            </div>
        </div>
        
    );
};
  
export default Enquire;