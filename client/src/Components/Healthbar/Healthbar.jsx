import React, { Component } from 'react'
import '../Healthbar/Healthbar.scss'

export default class Healthbar extends Component {




    render() {
        let HPArray = [];
        for(let i=0; i<this.props.hp; i++){
            HPArray.push(<div className="health__bar--point" key={i}></div>)
        }
        return (
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
        )
    }
}
