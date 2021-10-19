import React, { Component } from "react";

class NumberOfEvents extends Component {

  state = {
    numberOfEventsShowing: 32,
  }

  handleInputChanged(e) {
    const value = e.target.value;
    this.setState({
      numberOfEventsShowing: value
    });
  }

  render() {
    return (
      <input
        type='number'
        className='NumberOfEventsShowing'
        value={this.state.NumberOfEvents}
        onChange={(e) => this.handleInputChanged(e)}
      >Select Number of Events to Display (Default 32)
      </input>
    )
  }

}
export default NumberOfEvents;