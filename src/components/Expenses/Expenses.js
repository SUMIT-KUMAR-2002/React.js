import React from 'react';
import './Expenses.css'
import Expenseitem from '../Expenses/Expenseitem';
// import Card from './Card';


function Expenses(props) {
   return (
      <div className='expenses'>
         {
            props.item.map(
               expense => (
                  <Expenseitem
                  key={expense.id}
                     date={expense.date}
                     title={expense.title}
                     amount={expense.amount} />

               )
            )
         }
      </div>
   );
}

export default Expenses;