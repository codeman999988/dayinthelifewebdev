import React from 'react';
// import {Link} from 'react-router-dom';
import Button from '../Button/Button';
import './Buttons.scss';

class Buttons extends React.Component {
    constructor(props) {
        super(props);
    }

    state={
        Buttons: [],
    }

    componentDidMount () {
        this.setState({
            Buttons: this.props.buttons
        })
    }
    render() {
    return (
        <div className="buttons__bar">
            {this.props.ButtonsArray.map((btn, i) =>{ return (
            <Button
            name={btn.Name}
            path ={btn.Path}
            clickHandler={this.props.clickHandler}
            value= {btn.Damage}
            key={i}
            />
            )})}
        </div>
    )
}
}
export default Buttons;