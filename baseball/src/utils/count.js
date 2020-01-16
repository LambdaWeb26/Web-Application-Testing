

export const strikeClick = (strike) => {
    if (strike < 3){
        return strike + 1;
    } else {
         return strike = 0;
    }
}

export const ballClick = (ball) => {
    if (ball < 4) {
       return ball +1;
    } else {
       return ball = 0;
    }
}

export const foulClick = (strike) => {
    if (strike < 2){
        return strike + 1;
    } else{
        return strike;
    }
}

