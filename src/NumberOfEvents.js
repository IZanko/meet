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
      <div>
        <label>Number of Events Displaying </label>
        <input
          type='number'
          className='NumberOfEventsShowing'
          value={this.state.numberOfEventsShowing}
          onChange={(e) => this.handleInputChanged(e)}
        />
      </div>
    )
  }

}
export default NumberOfEvents;