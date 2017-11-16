import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisableExpenses from './selectors/expenses';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters';
import 'normalize.css/normalize.css';
import "./styles/styles.scss";
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
// store.subscribe(() => {
//     const state = store.getState();
//     console.log(state);
// });

store.dispatch(addExpense({ description: 'Water bill', amount: 1500 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 3000, createdAt: 1000}));
store.dispatch(addExpense({ description: 'Rent', amount: 109500}));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));