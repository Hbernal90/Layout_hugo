import React from 'react';

import App from './App';
import { findByTestAttribute } from './utils/testing-utils';
import { shallow, ShallowWrapper } from 'enzyme';

describe('App Component', () => {

  let wrapper : ShallowWrapper
  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('Should render without errors', () => {
    const component = findByTestAttribute(wrapper, 'appComponent');
    expect(component.length).toBe(1);
  })
})
