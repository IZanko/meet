import React from 'react';
import { shallow } from 'enzyme';

import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[0]} />);
  });

  test('render event summary', () => {
    expect(EventWrapper.find('.EventSummary')).toHaveLength(1);
  });
  test('render event location', () => {
    expect(EventWrapper.find('.EventLocation')).toHaveLength(1);
  });
  test('render event start time and date', () => {
    expect(EventWrapper.find('.EventStartTime')).toHaveLength(1);
  });

  test('show less details by default', () => {
    EventWrapper.setState({
      visible: false,
    });
    expect(EventWrapper.find('.EventDescription')).toHaveLength(0);
  });
  test('show more details onClick', () => {
    EventWrapper.setState({
      visible: false,
    });
    EventWrapper.find('.ShowMoreButton').simulate('click');
    expect(EventWrapper.find('.EventDescription')).toHaveLength(1);
  });
  test('show less details onClick', () => {
    EventWrapper.setState({
      visible: true,
    });
    EventWrapper.find('.ShowLessButton').simulate('click');
    expect(EventWrapper.find('.EventDescription')).toHaveLength(0);
  });
  test('do not render "ShowLessButton" when details are already hidden', () => {
    EventWrapper.setState({
      visible: false,
    });
    expect(EventWrapper.find('.ShowLessButton')).toHaveLength(0);
  })
  test('do not render "ShowMoreButton" when details are already showing', () => {
    EventWrapper.setState({
      visible: true,
    });
    expect(EventWrapper.find('.ShowMoreButton')).toHaveLength(0);
  })


});