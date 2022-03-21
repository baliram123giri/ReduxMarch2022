const {BUY_BOOK} = require("./bookType")

//create the action function

export const buyBook = (number=1)=>{
    return{
        type:BUY_BOOK,
        payload:number
    }
}