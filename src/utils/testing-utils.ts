import { ShallowWrapper } from 'enzyme';

export const findByTestAttribute = (component: ShallowWrapper, attr : string) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}