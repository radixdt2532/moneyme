import React from 'react';
import renderer from 'react-test-renderer';
import Intro from '../src/screens/Intro';

import { shallow } from 'enzyme';
import AppButton from '../src/components/Button/AppButton';

jest.useFakeTimers()

it('App renders without crashing', () => {
    const rendered = renderer.create(<Intro />).toJSON();
    expect(rendered).toBeTruthy();
});

describe('Test Button component', () => {
    it('Test click event', () => {
        const mockCallBack = jest.fn();

        const button = shallow((<AppButton onPress={mockCallBack} />));
        button.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });
});

