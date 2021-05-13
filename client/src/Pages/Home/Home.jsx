import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import homegif from '../../assets/homepage-gif.gif';
import './Home.scss';



class HomePage extends Component {


    render() {
        return (
            <section className="home-page">
            <h1 className="home-page__title">WEB DEV FOR A DAY</h1>
            <img src="https://i.pinimg.com/originals/1e/8f/c6/1e8fc67aec768e4554ea9e5f755c9ee7.gif" alt='startpage img' className="home-page__image" />
            <Link to="/gamepage"><h1 className="home-page__start-btn">START</h1></Link>
            </section>
        )
    }
}

export default HomePage;