import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './aboutus.css';

export const AboutUs = () => {
    return (
        <div>
            <Navbar />
            <div className='top-about'>
            <h1>
                About Us
            </h1>
            
            <p>
            <img className='illustration' src="https://bigheads.io/svg?accessory=none&body=chest&circleColor=blue&clothing=shirt&clothingColor=blue&eyebrows=raised&eyes=happy&faceMask=false&faceMaskColor=black&facialHair=none3&graphic=react&hair=pixie&hairColor=black&hat=none&hatColor=red&lashes=true&lipColor=turqoise&mask=true&mouth=openSmile&skinTone=light" 
            alt="Big Head" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a eleifend dui. Nunc suscipit aliquet mi in semper. Morbi at consectetur nulla. Duis quam neque, ultrices a sem ut, volutpat eleifend libero. Aenean vel neque eget justo egestas tempor. Suspendisse porttitor sapien sit amet accumsan bibendum. Ut quis sagittis purus, in scelerisque orci. Duis ac auctor arcu, aliquet aliquet odio.

Nunc lobortis gravida lorem a auctor. Vivamus quis gravida ligula. Etiam a sollicitudin arcu, eget venenatis odio. Proin pretium sem ut arcu mollis, in sollicitudin odio varius. In bibendum interdum eleifend. Mauris lectus nunc, sagittis nec lacinia eu, porta nec purus. Praesent sit amet tortor vel turpis dictum ultricies. Nam a sem felis. Cras ac ex sed eros cursus lacinia eget in mauris. Aenean tempor sapien sed lacus aliquet, non imperdiet dui sollicitudin. Aenean viverra egestas risus, sed aliquet mi bibendum sit amet. Vestibulum porta mollis metus ac scelerisque. Cras et felis in neque viverra maximus vel eget justo. Cras gravida tincidunt efficitur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse sed condimentum sapien.
            </p>
            </div>
            <Footer />
        </div>
    )
}
