import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
    constructor(props) {
        super(props);
    }

    state = {hp: 5}
    render() {
        console.log(this.props)
        let HPArray = [];
        for(let i=0; i<this.state.hp; i++){
            HPArray.push(<div className="health__bar--point" key={i}></div>)}
        return (
            <>
            <button 
            path={this.props.path}
            className="event__button"
            onClick={(e)=> {
                setTimeout(()=>{
                this.props.clickHandler(e)}, 200)
            }}
            >
                {this.props.name}
            </button>

            <div className="health-bar">
                <h1 className="health-bar__container">HP: (</h1>
                {
                    HPArray
                }
                <h1 className="health-bar__container health-bar__container--right"> )</h1>
            </div>
            </>
        )
    }
}

export default Button;