import React, {useState} from 'react';
import Expenses from './components/Expenses/Expenses.js';

import NewExpense from './components/NewExpenses/NewExpense.js';

let DUMMY_EXPENSE = [
  {
    id: 'e1',
    title: 'School Fee',
    amount: 250,
    date: new Date(2024, 12, 14)
  },
  {
    id: 'e2',
    title: 'College Fee',
    amount: 6250,
    date: new Date(2024, 11, 13)
  },
  {
    id: 'e3',
    title: 'Books',
    amount: 1250,
    date: new Date(2023, 12, 14)
  },
  {
    id: 'e4',
    title: 'House Rent',
    amount: 11250,
    date: new Date(2024, 12, 14)
  },
  {
    id: 'e5',
    title: 'Transport Fee',
    amount: 1050,
    date: new Date(2023, 10, 5)
  }
];

const App = () => {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
  const addExpenseHandler = (expense) =>{
    const updatedExpenses = [expense, ...expenses];
     setExpenses(updatedExpenses);
  };
  return(
    <div>

      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;