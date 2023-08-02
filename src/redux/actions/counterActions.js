import * as actionTypes from "./actionTypes"

export const increaseCounter=()=>({ 
    type:actionTypes.INCREASE_COUNTER,
    payload:1
}) //increaseCounter bir fonksiyona eşittir ve bu fonksiyonun değeri
//increaseCounter reducera geçiyor.reducera bakar gelen talebin içinde INCREASE_COUNTER varsa işlemi yap

export const decreaseCounter=()=>({
    type:actionTypes.DECREASE_COUNTER,
    payload:1
}) //reducer a gidicek
//değer olarak 1 gönderilir

export const increaseByTwoCounter=()=>({
    type:actionTypes.INCREASE_BY_TWO_COUNTER,
    payload:2 //gönderilen event türünün datası gibi
})

//reducer ilgili aksiyonu içerip içermediğine bakar