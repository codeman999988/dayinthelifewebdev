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

                {
                    HPArray
                }
                <h1 className="health-bar__container health-bar__container--right"> )</h1>
            </div>
        )
    }
}
