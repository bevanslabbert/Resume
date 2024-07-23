import React, { useEffect } from 'react';
import '../../styles/App.css';
import Header from '../../components/Header';
import BackgroundImage from '../../components/BackgroundImage';
import deadlift from '../../common/images/image.png';
import TickBoxCard from '../../components/TickBoxCard';
import Footer from '../../components/Footer';
import TickBoxPill from '../../components/TickboxPill';

const CoachingPackage: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    return (
        <div>
            <Header navBack={true}></Header>
            <BackgroundImage heading='Online Coaching' description='Individualised training programming and technique coaching' src={deadlift} alt='deadlift'/>
            <div className="tickbox-container">
                <TickBoxCard plan="Online Coaching" heading='Basic' price='$55/month' points={[{regular: "Program designed for your individual goals and needs"}, {regular: "Peaking and prep timed into your competitions"}, {regular: "Technique assessment and report to start off on your initial consultation"}, {regular: "Check-ins", bold: " once per month"}]}/>
                <TickBoxCard plan="Online Coaching" heading='Standard' price='$85/month' points={[{regular: "Program designed for your individual goals and needs"}, {regular: "Peaking and prep timed into your competitions"}, {regular: "Technique assessment and report to start off on your initial consultation"}, {regular: "Check-ins", bold: " once per week"}]}/>
                <TickBoxCard plan="Online Coaching" heading='Premium' price='$110/month' points={[{regular: "Program designed for your individual goals and needs"}, {regular: "Peaking and prep timed into your competitions"}, {regular: "Technique assessment and report to start off on your initial consultation"}, {regular: "Check-ins", bold: " once per day"}]}/>
            </div>
            <div className="tickbox-pills-container">
                <TickBoxPill plan="Online Coaching" heading='Basic' price='$55/month' points={[{regular: "Program designed for your individual goals and needs"}, {regular: "Peaking and prep timed into your competitions"}, {regular: "Technique assessment and report to start off on your initial consultation"}, {regular: "Check-ins", bold: " once per month"}]}/>
                <TickBoxPill plan="Online Coaching" heading='Standard' price='$85/month' points={[{regular: "Program designed for your individual goals and needs"}, {regular: "Peaking and prep timed into your competitions"}, {regular: "Technique assessment and report to start off on your initial consultation"}, {regular: "Check-ins", bold: " once per week"}]}/>
                <TickBoxPill plan="Online Coaching" heading='Premium' price='$110/month' points={[{regular: "Program designed for your individual goals and needs"}, {regular: "Peaking and prep timed into your competitions"}, {regular: "Technique assessment and report to start off on your initial consultation"}, {regular: "Check-ins", bold: " once per day"}]}/>
            </div>
            <Footer />
        </div>
    );
};
  
export default CoachingPackage;