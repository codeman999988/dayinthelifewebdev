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
                console.log(this.props)
                this.props.clickHandler(e)
            }}
            >
                {this.props.name}
            </button>

            <div className="health-bar">
                <h1 className="health-bar__container">HP: (</h1>
                {/* {this.state.hp.map(() => {
                        return <div className="health__bar--point"></div>
                    
                }) } */}
                {
                    HPArray
                // for(let i=0; i<this.state.hp; i++){
                    // console.log(this.state.hp);
                    // return <div className="health__bar--point"></div>
                // }
                }
                <h1 className="health-bar__container health-bar__container--right"> )</h1>
            </div>
            </>
        )
    }
}

export default Button;