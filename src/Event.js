import React, { Component } from "react";

class Event extends Component {

  state = {
    visible: false,
  }

  handleShowButton = () => {
    this.setState({ visible: true });
  };
  handleHideButton = () => {
    this.setState({ visible: false });
  };

  render() {
    let event = this.props.event;

    return <div className='Event'>
      <ul>
        <li className='EventSummary'>{event.summary}</li>
        <li className='EventLocation'>{event.location}</li>
        <li className='EventStartTime'>{event.start.dateTime}</li>
        {this.state.visible === true && (
          <p className='EventDescription'>{event.description}</p>
        )}
        {this.state.visible === false && (
          <button className='ShowMoreButton' onClick={() => this.handleShowButton()} >See More</button>
        )}
        {this.state.visible === true && (
          <button className='ShowLessButton' onClick={() => this.handleHideButton()} >See Less</button>
        )}
      </ul>
    </div>;
  }
}
export default Event;