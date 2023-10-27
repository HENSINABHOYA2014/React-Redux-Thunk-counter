let initialState = 0;
const Counter = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 5;
        case 'DRCREMENT':
            return state - 5;
            default :
            return state;
    }
}
export default Counter;