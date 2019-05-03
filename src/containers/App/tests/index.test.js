import React from "react";
import {shallow} from "enzyme";
import App from "../index";

describe('App', () => {
    it('should render App component', () => {
        const component = shallow(<App/>);
        expect(component).toMatchSnapshot();
    })
});