import React, { useState } from 'react';
import './Expenseitem.css';
 import ExpenseDate from './ExpenseDate';
//  import Card from './Card';

 function Expenseitem(props){
  

   return(
    <div className='expense-item'>
     <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      
    </div>
   );
 }

 export default Expenseitem;