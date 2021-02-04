import React from 'react'
import Expense from './Expense'

function ExpenseList() {
  const expenses = [
    {
      id: 1,
      payee: 'Kavi',
      amount:100,
      category:"Food"
    },
    {
      id: 2,
      payee: 'Nithi',
      amount: 200,
      category:"Shopping"
    },
    {
      id: 3,
      payee: 'Selvi',
     amount: 500,
      category:'Market'
    },
    {
        id: 4,
      payee: 'Hanshi',
      amount: 1000,
      category:'cloths'

    }
  ]
  const expenseList = expenses.map(person => <Expense key={person.id} person={person} />)
  return <div>{expenseList}</div>
}

export default ExpenseList
