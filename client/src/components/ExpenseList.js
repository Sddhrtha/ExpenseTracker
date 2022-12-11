import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Expense } from './Expense';

export const ExpenseList = () => {
  
  // eslint-disable-next-line
  const {expenses, getExpenses} = useContext(GlobalContext);

  useEffect(() => {
    getExpenses();
  }, [expenses])

  return (
    <>
    <h3>Expenses</h3>
    <ul id="list" className="list">
        {expenses.map(expense => (<Expense key={expense._id} expense={expense}/>))}
    </ul>
    </>
  )
}
