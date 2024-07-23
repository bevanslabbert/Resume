import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCheckCircle, faChevronLeft, faDumbbell, faGift, faHandPaper, faQuestion } from '@fortawesome/free-solid-svg-icons';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button, SxProps } from '@mui/material';
import { Theme } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface HeaderProps {
    navBack: boolean;
    whatWeOfferNav?: Function;
    packagesNav?: Function;
    faqsNav?: Function;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const navigate = useNavigate();
    const location = useLocation();

    const handleWhatWeOffer = () => {
        if (props.whatWeOfferNav)
            props.whatWeOfferNav();

        if (anchorEl)
            handleClose()
    }

    const handlePackages = () => {
        if (props.packagesNav)
            props.packagesNav();

        if (anchorEl)
            handleClose()
    }

    const handleFaqs = () => {
        if (props.faqsNav)
            props.faqsNav();

        if (anchorEl)
            handleClose()
    }

    const handleNavBack = (event: any) => {
        navigate(-1);
    }
    const menuClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSignUp = (event: any) => {
        navigate("enquire", {replace: true});
    }

    const handleHome = (event: any) => {
        navigate("/", {replace: true});
    }

    const menuSx: SxProps<Theme> = {
        marginTop: '1em'
    };

    const buttonSx: SxProps<Theme> = {
        fontWeight: 'bold',
        color: '#686D76',
        width: 'auto',
        marginRight: "2rem",
        '&:active': {
            color: "#FFFFFF"
        },
        '&:hover': {
            color: "#DC5F00"
        }
    };

    const actionButtonSx: SxProps<Theme> = {
        fontWeight: 'bold',
        color: '#FFFFFF',
        backgroundColor: '#DC5F00',
        width: 'auto',
        marginRight: '2rem',
        '&:active': {
            color: "#FFFFFF"
        },
        '&:hover': {
            color: "white",
            backgroundColor: "#DC5F00"
        }
    };


    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(window.scrollY);

    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowHeader(false);
        } else {
        // Scrolling up
        setShowHeader(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <div className={`header ${showHeader ? 'header--visible' : 'header--hidden'}`}>
            {
                props.navBack ? (
                    <div>
                        <div className='small-margin-left nav-back' onClick={handleNavBack} >
                            <FontAwesomeIcon color="#DC5F00" className="tiny-margin-right tiny-margin-left" fontSize='1.5em' height='100%' icon={faChevronLeft}/>
                        </div>
                        <div className='nav-back-logo' >
                        <Button sx={buttonSx} onClick={handleHome}>
                            <FontAwesomeIcon color="#DC5F00" className="tiny-margin-right tiny-margin-left" fontSize='2em' height='100%' icon={faDumbbell}/>
                            <p>Limit Breaker Strength</p>
                        </Button>
                        </div>
                    </div>
                ) :
                (
                     <Button sx={buttonSx} className='logo-container'>
                        <FontAwesomeIcon color="#DC5F00" className="tiny-margin-right tiny-margin-left" fontSize='2em' height='100%' icon={faDumbbell}/>
                        <p>Limit Breaker Strength</p>
                    </Button>
                )
            }

            {
               location.pathname === '/' ? (
                    <div className='menu-icon'>
                        <FontAwesomeIcon icon={faBars}
                            fontSize="2rem"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={menuClick}/>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                            sx={menuSx}
                        >
                            {
                                location.pathname === "/" ? <MenuItem onClick={handleWhatWeOffer}><span className='menu-item'><FontAwesomeIcon icon={faHandPaper} className='small-padding-right'/>What we offer</span></MenuItem> : null
                            }
                            {
                                location.pathname === "/" ? <MenuItem onClick={handlePackages}><span className='menu-item'><FontAwesomeIcon icon={faGift} className='small-padding-right'/>Packages</span></MenuItem> : null
                            }
                            {
                                location.pathname === "/" ? <MenuItem onClick={handleFaqs}><span className='menu-item'><FontAwesomeIcon icon={faQuestion} className='small-padding-right'/>FAQs</span></MenuItem> : null
                            }
                            {
                                location.pathname === "/" ? <MenuItem onClick={handleClose}><Link to={"enquire"} style={{ textDecoration: 'none', color: 'inherit' }}><span className='menu-item primary-color'><FontAwesomeIcon icon={faCheckCircle} className='small-padding-right'/>Sign Up</span></Link></MenuItem> : null
                            }
                            </Menu>
                    </div>
               ) : null
            }

            <div className='menu-items'>
                {
                    location.pathname !== "/" ? <Button sx={buttonSx} variant="text" onClick={handleHome}>Home</Button> : null
                }
                {
                    location.pathname === "/" ?  <Button variant="text" sx={buttonSx} onClick={handleWhatWeOffer}>What we offer</Button> : null
                }
                {
                    location.pathname === "/" ?  <Button variant="text" sx={buttonSx} onClick={handlePackages}>Packages</Button> : null
                }
                {
                    location.pathname === "/" ?   <Button variant="text" sx={buttonSx} onClick={handleFaqs}>FAQ's</Button> : null
                }
               
                {/* <Link to={"enquire"} replace={true}> */}
                {
                    location.pathname === "/" ? (
                        <Button variant="contained" sx={actionButtonSx} onClick={handleSignUp}><FontAwesomeIcon className='tiny-margin-right' icon={faCheckCircle} />Sign Up</Button>
                    ) : null
                }
                {/* </Link> */}
            </div>
        </div>
    );
};

export default Header;