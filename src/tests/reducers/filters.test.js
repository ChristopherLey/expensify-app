import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('Should set up default filter values', () => {
    const state = filtersReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('Should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
    expect(state.sortBy).toBe('amount');
});

test('Should set sortBy to date', () => {
    const filtersReducerState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };
    const state = filtersReducer(filtersReducerState, { type: "SORT_BY_DATE" });
    expect(state.sortBy).toBe('date');
});

test('Should set text filter', () => {
    const filtersReducerState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const state = filtersReducer(filtersReducerState, { 
        type: "SET_TEXT_FILTER", 
        'text': "test"
    });
    expect(state.text).toBe('test');
});

test('Should set startDate filter', () => {
    const filtersReducerState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const state = filtersReducer(filtersReducerState, { 
        type: "SET_START_DATE", 
        'startDate': 1000
    });
    expect(state.startDate).toBe(1000);
});

test('Should set endDate filter', () => {
    const filtersReducerState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const state = filtersReducer(filtersReducerState, { 
        type: "SET_END_DATE",
        endDate: 1000 
    });
    expect(state.endDate).toBe(1000);
});

