import React, { Component } from 'react';
import axios from 'axios';
import Button from '../../Components/Button/Button'
import './GamePage.scss';
import '../../Components/Button/Button.scss';
import ReactAudioPlayer from 'react-audio-player';
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



    componentDidMount () {
        axios
        .get("http://localhost:8080/")
        .then(response =>{

            this.setState(
                {
   
                EventPage: "1-1",
                
                ButtonsArray: response.data.find( evt => evt.Event === this.state.EventPage).Buttons,
                
                FlavorText: response.data.find( evt => evt.Event === this.state.EventPage).FlavorText,
                
                Events: response.data,

                Image: response.data.find( evt => evt.Event === this.state.EventPage).Image,

                Sound: response.data.find( evt => evt.Event === this.state.EventPage).Sound
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

                Sound: this.state.Events.find( evt => evt.Event === this.state.EventPage).Sound


                
            })
            

            
        }
    }
    render() {
console.log(this.state.Events?.find( evt => evt.Event === this.state.EventPage).Image)

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
        <audio controls>
  <source src="/Users/codycrenshaw/Desktop/dayinthelifewebdev/client/data/alarm2.mp3" type="audio/mp3" />
  </audio>


                </div>
                <HealthBar hp={this.state.hp} />
            </div>
        )
    }
}

export default GamePage;
