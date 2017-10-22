import {applyMiddleware} from 'redux'
const logger = (store) => (next) => (action)=> {
// manipulate action here
  console.log(action);
// forward action to next middleware(s) or to a reducer
    next(action)
};
// To use middlewares, use applyMiddleware utility from redux
export const middlewares = applyMiddleware(logger);