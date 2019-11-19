import React from 'react';
import './style.css'
import Image from '../../../image1.jpeg';

function About() {
    return (
        <div class='container'>
            <div class='row'>
                <div class='col-3'>
                </div>
                <div class='col-6'>
                    <div class='main-content'>
                        <img id='self' style={{width: 200, height: 150}} src={Image} alt='empty'></img>
                        <p id='paragraphs'>My name is Andrew Stiles, a 24 year old full stack developer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam maximus lacus vel finibus. Cras non varius urna. Vestibulum vel neque mollis, porttitor massa eget, pulvinar eros. Suspendisse dignissim libero commodo tristique vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent ornare pellentesque metus sed elementum. Nunc in commodo tortor, eu fringilla leo. Donec sit amet neque id mauris luctus viverra eu eu lorem. Vivamus at viverra odio. Praesent non tincidunt massa, ac posuere est. Proin ut odio ac diam maximus tincidunt in vitae quam. Suspendisse potenti. Nam vel velit id tellus tincidunt porta a et erat.</p>
                    </div>
                </div>
                <div class='col-3'>
                </div>
            </div>
        </div>
    )
}

export default About