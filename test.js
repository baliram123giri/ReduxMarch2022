const redux = require("redux")
const createStore = redux.createStore
// Actions 
//  {type: ""}

//lets' declear the globale constat

const BUY_LAPTOP = "BUY_LAPTOP"
const SELL_LAPTOP = "SELL_LAPTOP"
// 2. Action Createor / action creaters are function wich returen action
// so we are going to use examlpe of laptop store

//  2. action createor 1 
 function byLaptop (){
     return{
         type:BUY_LAPTOP
     }
 }
//  action creator 2
 function sellLaptop (){
   return{
       type:SELL_LAPTOP
   }
 }

//  3.Reducers 
// reducers are some functions wich accept old/initial state and returen new state
// convention is to use fat arrow

let initialState = {
    numOfLaptops:10
}
let rootReducer = (state=initialState, action)=>{
    switch(action.type){
        case BUY_LAPTOP:
            return{
                ...state,
                numOfLaptops:state.numOfLaptops+1
            }
            break

         case SELL_LAPTOP:
             return{
                ...state,
                numOfLaptops:state.numOfLaptops-1
             }
             break
        default:
          return state
    }
}

// create the store 

// create store is function

 const myStore = createStore(rootReducer)


 //now getb the latest value of sell
 console.log(myStore.getState())

 myStore.dispatch(byLaptop())
 myStore.dispatch(byLaptop())
 myStore.dispatch(byLaptop())
 myStore.dispatch(sellLaptop())
 myStore.dispatch(sellLaptop())
 console.log(myStore.getState())
