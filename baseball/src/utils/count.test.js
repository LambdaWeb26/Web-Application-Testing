import '@testing-library/jest-dom/extend-expect';
import {ballClick, strikeClick, foulClick} from "./count";

test('strike button adds 1 to the strike count', () => {
    expected(strikeClick(1).toEqual(2));
})


test('balls can only go up to 4 before reset', () => {

    expected(ballClick(1).toEqual(2));
})

test('you recieve only 2 fouls', () => {
    
    expected(foulClick(1).toBe(2));
})