import React from "react"
import Product from "./Redux2/Product/Product"
import { Provider } from "react-redux"
import { store } from "./Redux2/Redux/Store"
const App=()=>{
    return <div>
        <Provider store={store}>
            <h1>App Component</h1>
            <hr />
            <Product/>
        </Provider>
    </div>
}
export default App