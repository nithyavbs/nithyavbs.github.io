import React from 'react'
import './Expense.css';

function Expense({person:expense}) {
  return (
    <div>
        {expense.payee} <span></span> {expense.amount} <br/>
        {expense.category}
    
    </div>
   
  )
}

export default Expense