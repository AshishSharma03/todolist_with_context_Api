
export const ACTION = {

    ADD : 'ADD',
    DEL : 'DEL'

}


export const initialState =  []

function Reducer(state,action){

    switch(action.type){

        case ACTION.ADD :
            return [...state,action.payload.item];

        case ACTION.DEL :
            return state.filter( a => a.id !== action.payload.id)

        default :
        return  state
        ;
    }


}

export default Reducer