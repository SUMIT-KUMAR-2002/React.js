 import './Expenseitem.css';

 function Expenseitem(){
   return(
    <div className='expense-item'>
      <div>March 12th december 2024</div>
      <div className='expense-item__description'>
        <h2>Car Insurence</h2>
        <div className='expense-item__price'>$200</div>
      </div>
    </div>
   );
 }

 export default Expenseitem;