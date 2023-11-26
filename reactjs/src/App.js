import React from "react"
import Message from "./Redux1/Message/Message"
import { Provider } from "react-redux"
import { store } from "./Redux1/Redux/Store"
const App=()=>{
    return <div>
        <Provider store={store}>
        <h1>App Component</h1>
        <hr />
        <Message/>
        </Provider>
        
    </div>
}
export default App