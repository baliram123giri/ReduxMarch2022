import React from 'react'
import { Provider } from 'react-redux'
import BookContainer from './component/BookContainer'
import HookContainer from './component/HookContainer'
import store from './redux/store'
export default function App() {
  
  return (
   <Provider store={store}>
       <BookContainer/>
       <HookContainer/>
   </Provider>
  )
}
