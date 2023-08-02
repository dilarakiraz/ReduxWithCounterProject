import * as actionsTypes from "../actions/actionTypes"

const counterReducer = (state = 10, action) => { //çağırdığımız bütün reducerlarda action olup olmadığına bakar
    let newState;

    switch (action.type) { //gönderilen action type
        case actionsTypes.INCREASE_COUNTER: //typelardan biri 
            return(newState=state+action.payload)
        case actionsTypes.DECREASE_COUNTER: //typelardan biri 
            return(newState=state-action.payload)
        case actionsTypes.INCREASE_BY_TWO_COUNTER: //typelardan biri 
            return(newState=state+action.payload)
        default:
            return state;
    }
}//state i kontrol ettiğimiz yer
//reducerlar içinde api ye ya da veritabanına bağlanılmaz

export default counterReducer;