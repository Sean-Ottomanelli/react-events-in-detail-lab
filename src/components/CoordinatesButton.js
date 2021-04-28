// Code CoordinatesButton Component Here
import React, {Component} from 'react';



class CoordinatesButton extends Component {
    


createXAndYArray = (evt) => {
    let xAndYArray = []
    xAndYArray = [evt.clientX, evt.clientY]
    console.log(xAndYArray)
}

    render(props) {
        return(
            <div>
            {this.props.onReceiveCoordinates("I'm inside the div")}
            <button onClick = {this.createXandYArray} >Click Me!</button>
            </div>
        )
    }
}

export default CoordinatesButton