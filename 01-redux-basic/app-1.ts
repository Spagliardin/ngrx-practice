console.log('hola mundo');

// Accion

interface Action {
    type: string;
    payload?: any;
}

// const incrementAction: Action = {
//     type: 'INCREMENT'
// }

export function reducer( state = 10, action: Action ){

    switch ( action.type ) {
        case 'INCREMENT':
            return state += 1
            
        case 'DECREMENT':
            return state -= 1

        case 'MULTIPLY' :
            return state * action.payload;
        default:
            return state
    }

}

// use reducer

export const incrementAction: Action = {
    type: 'INCREMENT'
}

const decrementAction: Action = {
    type: 'DECREMENT'
}

 console.log(reducer(10, incrementAction)); 
 console.log(reducer(10, decrementAction));

 const multiplyAction: Action = {
    type: 'MULTIPLY',
    payload: 2
}

console.log(reducer(10, multiplyAction));