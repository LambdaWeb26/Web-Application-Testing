

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

export const outClick = (out) => {
    if (out < 3){
        return out + 1
    }else {
        return 0
    }
}

export const homeRunsClick = runs => {
    return runs + 1
}
export const awayRunsClick = runs => {
    return runs + 1
}
export const inningClick = inning => {
    if (inning < 9){
        return inning + 1
    } else {
        return 0
    }
}
