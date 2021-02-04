import React from "react";
import Expense from "./expense.jsx";

class expense extends React.Component {
  render() {
    // return Expense.call(this);function ExpenseList() {
    const expenses = [
      {
        id: 1,
        payee: 'Kavi',
        amount: 1000,
        date:"12-jan-2021 2.30 PM",
        category: "Food"
      },
      {
        id: 2,
        payee: 'Nithi',
        amount: 200,
        date:"12-Dec-2020 10.30 AM",
        category: "Shopping"
      },
      {
        id: 3,
        payee: 'Selvi',
        amount: 500,
        date:"27-jan-2021 11.00AM",
        category: 'Market'
      },
      {
        id: 4,
        payee: 'Hanshi',
        amount: 100,
        date:"08-Apr-2020 1.00 PM",
        category: 'cloths'

      }
    ]
    const expenseList = expenses.map(person => <Expense key={person.id} person={person} />)
    return <div>{expenseList}</div>
  }
}


 export default expense;
// import Expense from './Expense'



