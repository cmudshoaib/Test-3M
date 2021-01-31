import React from "react";
import Index from "pages/index";
import Capabilities from "pages/capabilities";
import Quality from "pages/quality";
import OurBrand from "pages/ourBrand";
import Clients from "pages/clients";
import ContactUs from "pages/contactUs";
import AboutUs from "pages/aboutUs";
import Page404 from "pages/page404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;

export default () => (
    <Router>
        <GlobalStyles />
        <Switch>
        			<Route exact path='/' component={Index}/>
			<Route exact path='/index' component={Index}/>
			<Route exact path='/capabilities' component={Capabilities}/>
			<Route exact path='/quality' component={Quality}/>
			<Route exact path='/our-brand' component={OurBrand}/>
			<Route exact path='/clients' component={Clients}/>
			<Route exact path='/contact-us' component={ContactUs}/>
			<Route exact path='/about-us' component={AboutUs}/>
			<Route component={Page404}/>
        </Switch>
    </Router>
);
