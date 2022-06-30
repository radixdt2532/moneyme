import React from 'react';
import renderer from 'react-test-renderer';
import Intro from '../src/screens/Intro';
jest.useFakeTimers()

it('App renders without crashing', () => {
    const rendered = renderer.create(<Intro />).toJSON();
    expect(rendered).toBeTruthy();
});

