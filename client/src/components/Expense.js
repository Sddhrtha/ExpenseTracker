import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Expense = ({ expense }) => {

  const { deleteExpense, numberWithCommas } = useContext(GlobalContext);

  return (
    <li >
            {expense.description} <span>₹{numberWithCommas(expense.amount)}</span><button
            onClick ={() => deleteExpense(expense._id)} className="delete-btn">x</button>
    </li>
  )
}
