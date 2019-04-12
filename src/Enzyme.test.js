import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';

describe('Enzyme tests', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBeTruthy();
  });

  test('can increment the count', () => {
    const wrapper = shallow(<App />);

    const incrementButton = wrapper.find('button.increment');

    incrementButton.simulate('click');

    const countText = wrapper.find('h6').text();

    expect(countText).toEqual('THE COUNT:1');
  });

  test('can decrement the count', () => {
    const wrapper = mount(<App />);

    const decrementButton = wrapper.find('button.decrement');

    decrementButton.simulate('click');

    const countText = wrapper.find('h6').text();

    expect(countText).toEqual('THE COUNT:-1');
  });

  test('can change the title', () => {
    const wrapper = shallow(<App />);

    const input = wrapper.find('input.title');

    input.simulate('change', { target: { value: 'Cats say meow' } });

    const titleText = wrapper.find('h2').text();

    expect(titleText).toEqual('Title is: Cats say meow');
  });
});
