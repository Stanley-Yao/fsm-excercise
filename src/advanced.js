class FSM {
    constructor(states, alphabet, initialState, finalStates, transitionFunction) {
        this.states = states;
        this.alphabet = alphabet;
        this.currentState = initialState;
        this.finalStates = finalStates
        this.transitionFunction = transitionFunction

    }

    process(input){
        for (const bit of input) {
            if (!this.alphabet.includes(bit)) {
                throw new Error(`Invalid input symbol: ${bit}`)
            }
            this.currentState = this.transitionFunction(this.currentState, bit);
        }
        return this.finalStates[this.currentState];
    }

    getOutput(outputMapping){
        return outputMapping[this.currentState];
    }
}


//validating the FSM class for implementing mod three
 const modThree = (input) =>{
    const states = ['S0', 'S1', 'S2'];
    const alphabet = ['0', '1'];
    const initialState = 'S0'
    const finalStates = ['S0', 'S1', 'S2']

    const transitionFunction = (currentState, inputSymbol) => {
        const transitions = {
            S0: { 0: 'S0', 1: 'S1' },
            S1: { 0: 'S2', 1: 'S0' },
            S2: { 0: 'S1', 1: 'S2' },
        };
        return transitions[currentState][inputSymbol];
    }

    const fsm = new FSM(states, alphabet, initialState, finalStates, transitionFunction);

    fsm.process(input);

    const outputMapping = {
        S0: 0,
        S1: 1,
        S2: 2,
    };

    return fsm.getOutput(outputMapping);
}
// console.log(modThree("110")); //0
// console.log(modThree("1010")); //1
// console.log(modThree("1110")); //2
// console.log(modThree("1111")); //0


module.exports = { modThree, FSM };