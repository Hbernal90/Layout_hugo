import { ShallowWrapper } from 'enzyme';
import { createEpicMiddleware } from 'redux-observable';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../redux/root-reducer';

export const findByTestAttribute = (component: ShallowWrapper, attr : string) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}

export const findByName = (component: ShallowWrapper, attr : string) => {
    const wrapper = component.find(`[name='${attr}']`);
    return wrapper;
}

export const testStore = () => {
    const epicMiddleware = createEpicMiddleware();
    const middlewares = [epicMiddleware]
    const createStoreWithMiddleware = createStore(rootReducer, applyMiddleware(...middlewares))
    return createStoreWithMiddleware;
};