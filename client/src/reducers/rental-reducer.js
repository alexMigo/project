import {FETCH_RENTALS,FETCH_RENTAL_BY_ID_SUCCESS} from '../actions/types'
const InitialState = {
    rentals:{
        data:[]
    },
    rental:{
        data:{}
    }
 }


export const rentalReducer = (state =InitialState.rentals, action) => {

    switch(action.type) {
        case 'FETCH_RENTALS':
        return {...state, data:action.rentals}
       
        default:
        return state;
    }
 }

 export const selectRentalReducer = (state = InitialState.rental, action) => {
    console.log('rental dispatch',action.rental);
      switch (action.type) {
          case 'FETCH_RENTAL_BY_ID_SUCCESS':
          return {...state, data:action.rental}
          default:
              return state;
      }
 }