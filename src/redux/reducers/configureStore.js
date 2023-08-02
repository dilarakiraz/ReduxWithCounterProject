import {createStore} from "redux"

import reducers from "./index"
//state veri tabanı gibi

export default function configureStore(){
    return createStore(reducers)
}
//bir state veri tabanı var bu state veri tabanının reducerları stateleri yöneten index.js içindeki combinereducerlar