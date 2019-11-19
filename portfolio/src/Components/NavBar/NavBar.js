import React from 'react';
import './style.css';

function NavBar() {
    return (
        <div>
            <nav style={{height: 80}} className="navbar navbar-expand-lg text-white">
                <div class='info'>
                    <a style={{padding: 0}} className="navbar-brand" href="/">Andrew Stiles</a>
                    <p id='position'>Full Stack Web Developer</p>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav text-white">
                        <li className="nav-item active text-white">
                            <a className="nav-link" id='about' href="/">About <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item text-white">
                            <a className="nav-link" href="/portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item text-white">
                            <a className="nav-link" id='contact' href="/contact">Contact</a>
                        </li> 
                    </ul>
                </div>
                <div class='links'>
                    <p id='sites'>Check Out my Sites</p>
                    <div class='icons'>
                        <a class='btn' target='blank' href="https://github.com/andrew129?tab=repositories"><i class="fa fa-2x fa-github" aria-hidden="true"></i></a>
                        <a class='btn' target='blank' href="https://www.linkedin.com/in/andrew-stiles-12b41167"><i class="fa fa-2x fa-linkedin-square" aria-hidden="true"></i></a>
                        <a class='btn' target='blank' href='https://soundcloud.com/en1gmamusic/tracks'><i class="fa fa-2x fa-soundcloud" aria-hidden="true"></i></a>
                        <a class='btn' target='blank' href='mailto:ndrwstls544@gmail.com'><i class='fa fa-2x fa-envelope' aria-hidden="true"></i></a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;