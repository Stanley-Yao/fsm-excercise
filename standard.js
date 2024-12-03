function modThreeStandard(input) {
    // Define states
    const states = {
        S0: { 0: 'S0', 1: 'S1' },
        S1: { 0: 'S2', 1: 'S0' },
        S2: { 0: 'S1', 1: 'S2' },
    };

    //Predefine output for each state
    const output = {
        S0: 0,
        S1: 1,
        S2: 2,
    };

    let currentState = 'S0';
    for (const bit of input) {

        currentState = states[currentState][bit];
    }
    return output[currentState];
}


console.log(modThreeStandard("110")); 
console.log(modThreeStandard("1010"));
console.log(modThreeStandard("1110")); 
console.log(modThreeStandard("1111")); 
