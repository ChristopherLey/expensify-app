import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should set up remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should set up edit expense action object', () => {
    const updates = {test1: "test1", test2: "test2"};
    const action = editExpense('123abc', updates);
    expect(action).toEqual({ 
        type: "EDIT_EXPENSE",
        id: '123abc', 
        updates: { 
            test1: "test1", 
            test2: "test2"
        } 
    });
});

test("Should setup add expense action object with provided values", () => {
    const expenseData = { 
        description: 'Rent', 
        note: 'this is a note', 
        amount: 109500, 
        createdAt: 1000,
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test("Should setup add expense action object with default values", () => {
    const expenseData = { 
        description: '', 
        note: '', 
        amount: 0, 
        createdAt: 0,
    };
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});