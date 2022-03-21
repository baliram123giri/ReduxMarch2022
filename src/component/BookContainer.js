import React from 'react'
import { connect } from 'react-redux'
import { buyBook } from '../redux'

function BookContainer(props) {
  return (
    <>
      <div>NumberOf Books {props.numOfBooks}</div>
    <button onClick={props.buyBook}>buy book</button>
    </>
  )
}

const mapStateToProps = (state)=>{
    return{
        numOfBooks:state.numOfBooks
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        buyBook:()=>{
            dispatch(buyBook())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BookContainer)