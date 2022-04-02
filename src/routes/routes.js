import React from 'react';
import {BrowserRouter as Router, Routes as Switch, Route} from 'react-router-dom';
import Home from '../pages/Home/home';
import Rooms from '../pages/Rooms/rooms';
import ContactUs from '../pages/ContactUs/contactUs';
import AboutUs from '../pages/AboutUs/AboutUs';
import Gallery from '../pages/Gallery/Gallery';
import Events from '../pages/Events/events';
import Header from '../components/Header/header';
import Footer from '../components/Footer/Footer';
import GlobalStyles from '../globalStyles'
import ScrollToTop from '../components/ScrollToTop';

const Routes = () => {
    return(
        <Router>
            <GlobalStyles/>
            <ScrollToTop/>
            <Header/>
            <Switch>
                <Route exact path = '/' element = {<Home/>}/>
                <Route exaxt path = '/rooms' element = {<Rooms/>}/>
                <Route exact path = '/contact-us' element= {<ContactUs/>}/>
                <Route exact path = '/events' element= {<Events/>}/>
                <Route exact path = '/about-us' element= {<AboutUs/>}/>
                <Route exact path = '/Gallery' element= {<Gallery/>}/>
            </Switch>
            <Footer/>
        </Router>
    )
}

export default Routes;