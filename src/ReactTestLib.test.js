import React from 'react';
import App from './App';
import { render } from 'react-testing-library';

describe('react-testing-lib tests', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />);

    expect(container).toBeTruthy();
  });
});
