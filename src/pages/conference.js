import React from 'react';
import AboutSection from '../components/AboutSection';
import ConferenceGallery from '../components/ConferenceGallery';
import ExtraInfo from '../components/ExtraInfo';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Nav from '../components/Nav';
import NumberSection from '../components/NumberSection';
import RegisterSection from '../components/RegisterSection';
import ResourcesSection from '../components/ResourcesSection';
import ScheduleSection from '../components/ScheduleSection';
import TestimonySection from '../components/TestimonySection';
import './conference.module.scss'


const ConferencePage = () => {
    return(
        <>
            <Nav />
            <HeroSection />
            <ExtraInfo />
            <AboutSection />
            <RegisterSection />
            <ResourcesSection />
            <TestimonySection />
            <ScheduleSection />
            {/* <ConferenceGallery /> */}
            <NumberSection />
            <Footer/>
        </>
    )
}

export default ConferencePage