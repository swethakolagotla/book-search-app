 import {
   FETCH_BOOKS_FAILURE,
   FETCH_BOOKS_REQUEST,
   FETCH_BOOKS_SUCCESS,
 } from  "../types/fetchBooksTypes";
 const initialstate = {
   loading: false,
   books: [],
   error: "",
 };
 const fetchBooksReducer = (state = initialstate, action) => {
   switch (action.type) {
     case FETCH_BOOKS_REQUEST:
       return {
         ...state,
         loading: true,
       };
     case FETCH_BOOKS_SUCCESS:
       return {
         loading: false,
        books: action.payload,
         error: "",
       };
     case FETCH_BOOKS_FAILURE:
       return {
         loading: false,
        books: [],
         error: action.payload,
       };
     default:
       return state;
   }
 };
 export default fetchBooksReducer;

