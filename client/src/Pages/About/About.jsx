import React, { Component } from 'react'
import felipe from '../../assets/Images/me.JPG';
import cody from '../../assets/Images/cody.JPG';
import '../About/About.scss'

export default class About extends Component {
    render() {
        return (
                <div className="about__section">
                    <div className="about__section__person">
                        <img className='cody' src={cody} alt='cody' />
                        <h1 className="names"> Sir Cody Crenshaw</h1>
                        <h2>BrainStaion Student</h2>
                    </div>
                    <div className="about__section__person">
                        <img className="felipe"src={felipe} alt='felipe'/>
                        <h1 className="names">Felipe "the Dude" Villa</h1>
                        <h2>BrainStaion Student</h2>
                    </div>
                </div>
            
        )
    }
}
