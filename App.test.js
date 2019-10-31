import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';

// to fix jest TypeError: Cannot read property 'current' of undefined see :
// https://github.com/testing-library/react-hooks-testing-library/issues/151#issuecomment-523865511
describe('<App />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});
