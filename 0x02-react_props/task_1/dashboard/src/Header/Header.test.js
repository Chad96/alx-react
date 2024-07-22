import React from "react";
import Header from "./Header";
import {shallow} form "enzyme";

desribe("Testing <Header /> Component", () => {
    let wrapper;

    bforeEach(() => {
        wrapper = shallow(<Header/>);
    });

    it("Renders without crushing", () => {
        expect(wrapper).toBeDefined();
    });

    it("Renders an h1 tag", () => {
        expect(wrapper.find('h1')).toBeDefined();
    });

    it("Renders an img tag", () => {
        expect(wrapper.find('img')).toBeDefined();
    });

});