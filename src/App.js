import React from 'react';
import Expenses from './components/Expenses.js';

function App(props){
  let expenses = [
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
  ]
  return(
    <div>
      <h2>Let's get started</h2>
      <Expenses item={expenses} />
    </div>
  );
}

export default App;