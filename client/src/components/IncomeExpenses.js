import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {

  const {expenses, income, numberWithCommas } = useContext(GlobalContext);

  const Expenses = numberWithCommas(expenses.map(expense => expense.amount).reduce((a, b) => a + b, 0));
  const Income = numberWithCommas(income.map(inc => inc.amount).reduce((a,b) => a + b, 0));
  return (
    <>
        <div className="inc-exp-container">
            <div>
            <h4>Income</h4>
            <p className="money plus">₹{Income}</p>
            </div>
            <div>
            <h4>Expenses</h4>
            <p className="money minus">₹{Expenses}</p>
            </div>
        </div>
    </>    
  )
}
