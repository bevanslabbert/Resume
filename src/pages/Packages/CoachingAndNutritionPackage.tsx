import React, { useEffect } from 'react';
import '../../styles/App.css';
import Header from '../../components/Header';
import BackgroundImage from '../../components/BackgroundImage';
import TickBoxCard from '../../components/TickBoxCard';
import deadlift from '../../common/images/image.png'
import Footer from '../../components/Footer';
import TickBoxPill from '../../components/TickboxPill';

const CoachingAndNutritionPackage: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div>
            <Header navBack={true}></Header>
            <BackgroundImage heading='Online Coaching + Nutrition' description='Individualised training programming and technique coaching' src={deadlift} alt='deadlift'/>
            <div className="tickbox-container">
                <TickBoxCard plan="Online Coaching + Nutrition" heading='Basic' price='$20/month' points={[{regular: "Program designed for your individual goals and needs"}, {regular: "Peaking and prep timed into your competitions"}, {regular: "Technique assessment and report to start off on your initial consultation"}, {regular: "Check-ins", bold: " once per month"}, {regular: "Initial dietary assessment"}, {regular: "Individual nutrition plan designed to hit macronutrient targets"}, {bold: "Monthly ", regular: "check-ins"}, {regular: "Calorie and macronutrient targets provided and adjusted when needed"}, {regular: "Supplement guidelines"}, {regular: "Weight cut guidelines for competitions"}]}/>
                <TickBoxCard plan="Online Coaching + Nutrition" heading='Standard' price='$30/month' points={[{regular: "Program designed for your individual goals and needs"}, {regular: "Peaking and prep timed into your competitions"}, {regular: "Technique assessment and report to start off on your initial consultation"}, {regular: "Check-ins", bold: " once per week"}, {regular: "Initial dietary assessment"}, {regular: "Individual nutrition plan designed to hit macronutrient targets"}, {bold: "Weekly ", regular: "check-ins"}, {regular: "Calorie and macronutrient targets provided and adjusted when needed"}, {regular: "Supplement guidelines"}, {regular: "Weight cut guidelines for competitions"}]}/>
                <TickBoxCard plan="Online Coaching + Nutrition" heading='Premium' price='$40/month' points={[{regular: "Program designed for your individual goals and needs"}, {regular: "Peaking and prep timed into your competitions"}, {regular: "Technique assessment and report to start off on your initial consultation"}, {regular: "Check-ins", bold: " once per day"}, {regular: "Initial dietary assessment"}, {regular: "Individual nutrition plan designed to hit macronutrient targets"}, {bold: "Daily ", regular: "check-ins"}, {regular: "Calorie and macronutrient targets provided and adjusted when needed"}, {regular: "Supplement guidelines"}, {regular: "Weight cut guidelines for competitions"}]}/>
            </div>
            <div className="tickbox-pills-container large-margin-bottom">
                <TickBoxPill plan="Online Coaching + Nutrition" heading='Basic' price='$20/month' points={[{regular: "Program designed for your individual goals and needs"}, {regular: "Peaking and prep timed into your competitions"}, {regular: "Technique assessment and report to start off on your initial consultation"}, {regular: "Check-ins", bold: " once per month"}, {regular: "Initial dietary assessment"}, {regular: "Individual nutrition plan designed to hit macronutrient targets"}, {bold: "Monthly ", regular: "check-ins"}, {regular: "Calorie and macronutrient targets provided and adjusted when needed"}, {regular: "Supplement guidelines"}, {regular: "Weight cut guidelines for competitions"}]}/>
                <TickBoxPill plan="Online Coaching + Nutrition" heading='Standard' price='$30/month' points={[{regular: "Program designed for your individual goals and needs"}, {regular: "Peaking and prep timed into your competitions"}, {regular: "Technique assessment and report to start off on your initial consultation"}, {regular: "Check-ins", bold: " once per week"}, {regular: "Initial dietary assessment"}, {regular: "Individual nutrition plan designed to hit macronutrient targets"}, {bold: "Weekly ", regular: "check-ins"}, {regular: "Calorie and macronutrient targets provided and adjusted when needed"}, {regular: "Supplement guidelines"}, {regular: "Weight cut guidelines for competitions"}]}/>
                <TickBoxPill plan="Online Coaching + Nutrition" heading='Premium' price='$40/month' points={[{regular: "Program designed for your individual goals and needs"}, {regular: "Peaking and prep timed into your competitions"}, {regular: "Technique assessment and report to start off on your initial consultation"}, {regular: "Check-ins", bold: " once per day"}, {regular: "Initial dietary assessment"}, {regular: "Individual nutrition plan designed to hit macronutrient targets"}, {bold: "Daily ", regular: "check-ins"}, {regular: "Calorie and macronutrient targets provided and adjusted when needed"}, {regular: "Supplement guidelines"}, {regular: "Weight cut guidelines for competitions"}]}/>
            </div>
            <Footer />
        </div>
    );
};
  
export default CoachingAndNutritionPackage;