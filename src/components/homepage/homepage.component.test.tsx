import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { findByTestAttribute, testStore } from '../../utils/testing-utils';
import Homepage from './homepage.component';

const setUp = () => {
    const store = testStore();
    const wrapper = shallow(<Homepage store={store} />).childAt(0).dive();
    return wrapper;
}

describe('Test Homepage Component', () => {

    describe('Test Render', () => {

        let wrapper : ShallowWrapper;
        beforeEach(() => {
            wrapper = setUp()
        })

        it('Should render correctly', () => {
            const component = findByTestAttribute(wrapper, 'homepageContainer')
            expect(component.length).toBe(1)
        })

        it('Should render locations Dropdown', () => {
            const component = findByTestAttribute(wrapper, 'locationsSelectButton')
            expect(component.length).toBe(1)
        })

        it('Should render floors Dropdown', () => {
            const component = findByTestAttribute(wrapper, 'floorsSelectButton')
            expect(component.length).toBe(1)
        })

        it('Should render sections Dropdown', () => {
            const component = findByTestAttribute(wrapper, 'sectionsSelectButton')
            expect(component.length).toBe(1)
        })
    })

})