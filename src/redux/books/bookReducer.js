const {BUY_BOOK} = require("./bookType")

//first state
const initialState = {
    numOfBooks:10
}

//create reducer function
const bookReducer = (state = initialState, action)=>{

    switch(action.type){
        case BUY_BOOK:
            return{
                ...state,
                numOfBooks:state.numOfBooks<1?0:state.numOfBooks-action.payload
            }
        default:
            return state
    }
}

//export to reducer

export default bookReducer