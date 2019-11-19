import React from 'react';
import './style.css';
import Wrapper from '../../Wrapper';
import Crystal from '../../../crystals.png';
import WordGame from '../../../wordgame.png';
import Giphy from '../../../giphy.png';
import Synth from '../../../synth.png';
import Train from '../../../train.png';
import Trivia from '../../../quiz.png';
import Crynance from '../../../crynance.png';

function Portfolio() {
    return (
        <div>
            <div class='container'>
                <div class='row'>
                    <div class='col-1'>
                    </div>
                    <div class='col-10'>
                        <Wrapper>
                            <a target='blank' href='https://andrew129.github.io/unit-4-game/'><img src={Crystal} alt="broken"></img></a>
                            <a target='blank' href='https://andrew129.github.io/Word-Guess-Game/'><img src={WordGame} alt="broken"></img></a>
                            <a target='blank' href='https://andrew129.github.io/Giftastic/'><img src={Giphy} alt="broken"></img></a>
                            <a target='blank' href='https://hochiefminh.github.io/PlayAlongSynth/'><img src={Synth} alt="broken"></img></a>
                            <a target='blank' href='https://andrew129.github.io/Train-Scheduling/'><img src={Train} alt="broken"></img></a>
                            <a target='blank' href='https://andrew129.github.io/TriviaGame/'><img src={Trivia} alt="broken"></img></a>
                            <a target='blank' href='https://powerful-brushlands-33417.herokuapp.com/'><img src={Crynance} alt="broken"></img></a>
                        </Wrapper>
                    </div>
                    <div class='col-1'>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
