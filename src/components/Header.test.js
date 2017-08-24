import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Header from './Header';

describe('Header', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    let setTitle = jest.fn();
    ReactDOM.render(<Header setTitle={setTitle} />, div);
  });

  it('should render properly', () => {
    //throw 'TODO';
  });

  it('should handle a click event', () => {
    const div = document.createElement('div');
    let setTitle = jest.fn();
    ReactDOM.render(<Header onHeaderClick={onHeaderClick} />, div);
  });
});
