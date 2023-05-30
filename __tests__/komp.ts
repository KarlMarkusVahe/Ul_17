/*
import {Adder, SimpleAdder} from "../index";

test('test1', () => {
    let adder:Adder=new SimpleAdder();
    expect(adder.getSum()).toBe(0);
    adder.add(3);
    expect(adder.getSum()).toBe(3);
    adder.add(5);
    expect(adder.getSum()).toBe(8);
});

let adder:Adder=null;

beforeEach(() => {
    adder=new SimpleAdder();
})

test('start', () => {
    expect(adder.getSum()).toBe(0);
});

test('one value', () => {
    adder.add(3);
    expect(adder.getSum()).toBe(3);
});

test('two values', () => {
    adder.add(3);
    adder.add(5);
    expect(adder.getSum()).toBe(8);
});

*/

import {StoringAdder} from "../index2";

let adder:StoringAdder=null;
beforeEach(() => {
    adder=new StoringAdder();
})

test('start', () => {
    expect(adder.getSum()).toBe(0);
});

test('one value', () => {
    adder.add(3);
    expect(adder.getSum()).toBe(3);
});

test('two values', () => {
    adder.add(3);
    adder.add(5);
    expect(adder.getSum()).toBe(8);
});

test('two values range', () => {
    adder.add(3);
    adder.add(5);
    expect(adder.getRange()).toBe(2);
});