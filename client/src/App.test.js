import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('test for component rendered', () => {
  const renderedComponent = renderer.create(<App />).toJSON()
  expect(renderedComponent).toMatchSnapshot()
});