// Code CoordinatesButton Component Here
import React, { Component } from 'react';



class CoordinatesButton extends Component {


    render(props) {
        return (
            <div>
                <button onClick={(evt) => this.props.onReceiveCoordinates([evt.clientX, evt.clientY])} >Click Me!</button>
            </div>
        )
    }
}

export default CoordinatesButton