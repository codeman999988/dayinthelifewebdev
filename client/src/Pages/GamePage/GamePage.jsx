import React, { Component } from 'react';
import axios from 'axios';
import Button from '../../Components/Button/Button'
import './GamePage.scss';
import '../../Components/Button/Button.scss';
// import ThreeFour from '../../assets/images/ThreeFour.jpeg';
// import OneOne from '../../assets/images/OneOne.gif';
// import OneTwoA from '../../assets/images/OneTwoA.jpg';
// import OneTwo from '../../assets/images/OneTwo.jpg';
// import TwoOne from '../../assets/images/TwoOne.jpeg';
// import TwoThreeB from '../../assets/images/TwoThreeB.jpeg';
// import TwoTwo from '../../assets/images/TwoTwo.jpeg';
// import TwoFourB from '../../assets/images/TwoFourB.jpeg';
// import OneThreeB from '../../assets/images/OneThreeB.jpeg';
// import ThreeOne from '../../assets/images/ThreeOne.jpeg';
// import ThreeThree from '../../assets/images/ThreeThree.jpeg';
// import ThreeTwo from '../../assets/images/ThreeTwo.jpeg';
// import OneTwoA from '../../assets/images/OneTwoA.jpg';
import HealthBar from '../../Components/Healthbar/Healthbar';
import path from 'path';


class GamePage extends Component {
    constructor(props){
        super(props)


    this.state= {
        hp: 5,
        GameProgress: [],
        EventPage: "1-1",
        ButtonsArray: [],
        Events: null,
        Image: ''

    }
    this.clickHander=this.clickHandler.bind(this);
}


    clickHandler (e) {
        e.preventDefault();
        console.log(e);
        console.log(this.props);
        console.log(e.target.value);
        this.setState({
            EventPage: e.target.attributes[0].value,
        })
        
    }

    // takeDamage(e) {
    //     if(e === true ){
    //         return this.state.hp - 1
    //     }else if {
            
    //     }

    // }

    componentDidMount () {
        axios
        .get("http://localhost:8080/")
        .then(response =>{
            // console.log(TwoTwo);
            this.setState(
                {
                // GameProgress: [1],
                EventPage: "1-1",
                
                ButtonsArray: response.data.find( evt => evt.Event === this.state.EventPage).Buttons,
                
                FlavorText: response.data.find( evt => evt.Event === this.state.EventPage).FlavorText,
                
                Events: response.data,

                Image: response.data.find( evt => evt.Event === this.state.EventPage).Image,
                }
                )
            })
        
        }
    

    componentDidUpdate (prevProps, prevState) {
        if(this.state.EventPage !== prevState.EventPage){
            this.setState({
                ButtonsArray: this.state.Events.find( evt => evt.Event === this.state.EventPage).Buttons,
                
                FlavorText: this.state.Events.find( evt => evt.Event === this.state.EventPage).FlavorText,
                
                Image: this.state.Events.find( evt => evt.Event === this.state.EventPage).Image,

                // hp: this.state.hp
                
            })
            
    //         this.setState({
    //             // ButtonsArray: response.data.find( evt => evt.Event == this.state.EventPage).Buttons,
    //             // FlavorText: response.data.find( evt => evt.Event == this.state.EventPage).FlavorText
    //         })
            
        }
    }
    render() {
console.log(this.state.Events?.find( evt => evt.Event === this.state.EventPage).Image)
// console.log(this.state.Image);
// console.log(require(`../../assets/images${this.state.Image}`))
        return (
            <div>
                <div className="event__container">
                <img className="event__image" alt='' src={this.state.Image} />

                <div className="event__flavortext">{this.state.FlavorText}</div>
                
                <div className="buttons__bar">
            {this.state.ButtonsArray.map((btn, i) =>{ return (
            <Button
            name={btn.Name}
            path ={btn.Path}
            dmg= {btn.Damage}
            clickHandler={(e)=>{if(btn.Damage == true){
                console.log(btn.Damage);
                this.setState({hp: (this.state.hp)-1})
            }
                this.clickHandler(e)}}
          
            key={i}
            />
            )})}
        </div>
                {/* <Buttons 
                EventPage={this.state.EventPage}
                ButtonsArray={this.state.ButtonsArray}
                clickHandler={(e) => {
                    this.clickHandler(e)
                }} */}
                </div>
                <HealthBar hp={this.state.hp} />
            </div>
        )
    }
}

export default GamePage;
