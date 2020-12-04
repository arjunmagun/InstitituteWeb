import React from "react";
import Homepage from './components/HomePage/Homepage';
import {BrowserRouter as Router, Route} from "react-router-dom";
import { AboutUs } from "./components/About/AboutUs";
import ContactUs from "./components/Contact/contactUs";
import Course from "./components/Course/Course";

export default function App() {
  return (
      <div className="App">
        <Router>
          <Route exact path="/"  component={Homepage} />
          <Route exact path="/about"  component={AboutUs} />
          <Route exact path="/contact"  component={ContactUs} />
          <Route exact path="/course" component={Course} />
        </Router>
      </div>
  );
}
