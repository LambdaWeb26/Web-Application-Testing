import '@testing-library/react';
import {ballClick, strikeClick, foulClick} from "./count";

test('strike button adds 1 to the strike count', () => {
    let actual = strikeClick(1);
    let expected = 2
    
    expect(actual).toBe(expected);
    expect(strikeClick(1)).toBe(2);
}),


test('balls can only go up to 4 before reset', () => {

    expect(ballClick(1)).toEqual(2);
}),

test('you recieve only 2 fouls', () => {
    
    expect(foulClick(1)).toBe(2);
})