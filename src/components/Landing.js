import React, { Component } from 'react';
import '../style/Landing.css';
import kdo from '../assets/kdo.png'
import {Howl} from 'howler';
import kdoON from '../assets/kdoON.mp3';
import silence from '../assets/silence.mp3';

const init = new Howl({
    src: silence,
    volume: 0.7,
    loop: true,
});
const kd = new Howl({
    src: kdoON,
    volume: 0.5,
    loop: true,
});
function play() {
    kd.play()
}
function mute() {
    kd.stop()
}
function go() {
    window.open("https://www.google.com","_self")
}
class Landing extends Component {
    constructor(props) {
        super();
    }
    render() {
        init.play();
        return <div id="landContainer">
            <img src={kdo} className="kdo" alt="kdo" onMouseEnter={play} onMouseLeave={mute} onClick={go}/>
            <h1>Click on the box!</h1>
        </div>
    }
}


export default Landing;