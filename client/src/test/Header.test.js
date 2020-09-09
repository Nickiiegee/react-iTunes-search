import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/Header';
import renderer from 'react-test-renderer';

test('renders without crashing', () => {
  const form = document.createElement('form');
  ReactDOM.render(<Header />, form);
  ReactDOM.unmountComponentAtNode(form);
});

test('test for Header component rendered', () => {
  const renderedComponent = renderer.create(<Header />).toJSON()
  expect(renderedComponent).toMatchSnapshot()
});