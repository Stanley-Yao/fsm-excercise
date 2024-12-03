const { modThree, FSM } = require('../src/advanced');

test('modThree function', () => {
    expect(modThree("110")).toBe(0);
    expect(modThree("1010")).toBe(1);
    expect(modThree("1110")).toBe(2);
    expect(modThree("1111")).toBe(0);
    expect(modThree("")).toBe(0); // Test with empty input
    expect(() => modThree("t")).toThrow('Invalid input symbol: t'); // Test with invalid input
})

test('FSM class throwing errros when it is seeing invalid input', () => {
    const states = ['S0', 'S1', 'S2'];
    const alphabet = ['0', '1'];
    const initialState = 'S0';
    const finalStates = ['S0', 'S1', 'S2'];

    const transitionFunction = (currentState, inputSymbol) => {
        const transitions = {
            S0: { 0: 'S0', 1: 'S1' },
            S1: { 0: 'S2', 1: 'S0' },
            S2: { 0: 'S1', 1: 'S2' },
        };
        return transitions[currentState][inputSymbol];
    };

    const fsm = new FSM(states, alphabet, initialState, finalStates, transitionFunction);

    // Test invalid input
    expect(() => fsm.process("2")).toThrow('Invalid input symbol: 2');

});