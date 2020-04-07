import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { findByTestAttribute } from '../../utils/testing-utils';
import SelectButton from './select-button';

describe('<SelectButton /> Testing', () => {

    describe('Passing Props', () => {

        const comboBox = {
            locations:{
                MDC: {
                    floors: {
                        "0": {
                            sections: ["A", "B", "C"]
                        },
                        "18": {
                            sections: ["A", "B", "C"]
                        },
                        "24": {
                            sections: ["A", "B", "C"]
                        }
                    }
                },
                Austin: {
                    floors: {
                        "0": {
                            sections: ["A", "B", "C"]
                        },
                        "18": {
                            sections: ["A", "B", "C"]
                        },
                        "24": {
                            sections: ["A", "B", "C"]
                        }
                    }
                }
            }
        }

        let wrapper : ShallowWrapper;
        beforeEach(() => {
            const props = {
                name: "locations",
                inputLabel: "Locations",
                items: Object.keys(comboBox.locations),
                itemsSelected: "MDC",
                handleSelect: () => {}
            }
            wrapper = shallow(<SelectButton {...props} />)
        })

        it('Should Render',  () => {
            const component = findByTestAttribute(wrapper, 'selectButton');
            expect(component.length).toBe(1);
        })
    }) 
})