import React from 'react'
import Navbar from '../Navbar/Navbar';
import { Container } from "react-bootstrap";

import './course.css';

export default function Course() {
    return (
        <div className='main_course'>
            <Navbar />
            <Container>
                <h1 className='title_course'>Course name</h1>
                <img 
                    className='course_image'
                    src={require('../../assets/images/neonbrand-1-aA2Fadydc-unsplash.jpg')} 
                    alt='Course Image'
                />
                <p className='course_description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Phasellus eu sapien volutpat, varius lectus egestas, tincidunt
                    magna. Maecenas eleifend nisi ut nulla commodo auctor. Nam 
                    cursus leo erat, non laoreet lacus iaculis sed. Ut at mi est.
                    Suspendisse posuere, dui quis gravida tempor, libero orci 
                    dictum est, ac scelerisque turpis odio non eros. Suspendisse
                    dolor dui, dapibus ut pellentesque vel, tempus quis leo. 
                    Aliquam quis metus sit amet metus suscipit vestibulum id et
                    augue. Morbi libero lorem, vulputate quis tempor ac, 
                    consectetur in odio. Quisque ut velit ligula. Sed dictum mi 
                    velit, sit amet ultrices leo auctor ut.
                    Nunc porttitor cursus nulla eget pretium. Maecenas tempus 
                    est lacus, sed lobortis elit tristique et. Nullam scelerisque
                    neque efficitur, convallis purus fermentum, auctor orci.
                    Phasellus volutpat quis tortor facilisis dignissim. Quisque
                    sodales vel augue id dignissim. Vestibulum metus erat, 
                    pottitor condimentum luctus a, suscipit ut quam. Donec 
                    accumsan felis turpis, tempus lacinia est varius sit amet.
                </p>
            </Container>
        </div>
    )
}
