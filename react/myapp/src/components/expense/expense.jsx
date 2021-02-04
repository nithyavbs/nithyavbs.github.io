import "./expense.css";
import React from "react";
import Footer from '../footer'

// function template() {
//   return (
//     <div className="expense">
//       <h1>expense</h1>
//     </div>
//   );
// };

// export default template;

function expense({person:expense}) {
  return (
      <div>
        <ul>
          <li>
      <div className= 'expense'>
       <b>{expense.payee}</b> <span><b className="amount"> ₹{expense.amount}</b></span><br/>
       {expense.date}<br/>
        {expense.category}
    </div>
    </li>
    </ul>
    </div>
  
  )
}

export default expense;