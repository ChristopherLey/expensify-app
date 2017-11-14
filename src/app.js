import ReactDOM from 'react-dom';
import React from 'react';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisableExpenses from './selectors/expenses';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters';
import 'normalize.css/normalize.css';
import "./styles/styles.scss";

const store = configureStore();
store.subscribe(() => {
    const state = store.getState();
    const visableExpenses = getVisableExpenses(state.expenses, state.filters);
    console.log(visableExpenses);
});

const expenseOne = store.dispatch(addExpense({ 
    description: 'Water bill', amount: 1500 
}));
const expenseTwo = store.dispatch(addExpense({ 
    description: 'Gas bill', amount: 3000
}));
store.dispatch(setTextFilter('bill'));
store.dispatch(setTextFilter('water'));

ReactDOM.render(<AppRouter />, document.getElementById('app'));