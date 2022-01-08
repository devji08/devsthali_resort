import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../pages/Home/home';
import Rooms from '../pages/Rooms/rooms';
import ContactUs from '../pages/ContactUs/contactUs';
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
                <Route exact path = '/' component = {Home}/>
                <Route exaxt path = '/rooms' component = {Rooms}/>
                <Route exact path = '/contact-us' component= {ContactUs}/>
                {/* <Route exact path = '/events' component= {Carousel}/> */}
            </Switch>
            <Footer/>
        </Router>
    )
}

export default Routes;