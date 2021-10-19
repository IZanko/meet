import React from 'react';
import { shallow } from 'enzyme';

import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents/> component', () => {

  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('number input is rendered', () => {
    expect(NumberOfEventsWrapper.find('.NumberOfEventsShowing')).toHaveLength(1);
  });
  test('default value of numberOfEventsShowing is 32', () => {
    expect(NumberOfEventsWrapper.state('numberOfEventsShowing')).toEqual(32);
  });

  test('update state of numberOfEventsShowing to user input', () => {
    NumberOfEventsWrapper.setState({ numberOfEventsShowing: 32 });
    NumberOfEventsWrapper.find(".NumberOfEventsShowing").simulate("change", {
      target: { value: 40 },
    });
    expect(NumberOfEventsWrapper.state("numberOfEventsShowing")).toEqual(40);
  });

});