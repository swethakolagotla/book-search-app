import {
  FETCH_BOOKS_FAILURE,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_REQUEST,
} from  "../types/fetchBooksTypes";
import axios from "axios";
export const fetchbooksRequest = () => {
  return {
    type: FETCH_BOOKS_REQUEST,
  };
};
export const fetchbooksSuccess = (books) => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload:books,
  };
};
export const fetchbooksFailure = (error) => {
  return {
    type: FETCH_BOOKS_FAILURE,
    payload: error,
  };
};
export const fetchBooks = (title) => {
  return (dispatch) => {
    dispatch(fetchbooksRequest);
    //instead of returning an action, we returning a function.... this return function doesnt have to be pure  .. it can allow side effects such as async api calls
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${title}&key=AIzaSyDBm33-MqmTvO3kEfKh8AKSCPguDicyU4o `
      )
      .then((response) => {
        const books = response.data.items;
        console.log(books)
        dispatch(fetchbooksSuccess(books));
      })
      .catch((error) => {
        const errormessage = error.message;
        dispatch(fetchbooksFailure(errormessage));
      });
  };
};
