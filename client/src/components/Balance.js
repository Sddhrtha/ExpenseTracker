import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {

  const {expenses, income, numberWithCommas } = useContext(GlobalContext);
  const amounts = expenses.map(expense => expense.amount);
  const amounts2 = income.map(inc => inc.amount);
  // console.log(amounts);
  // console.log(amounts2);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const total2 = amounts2.reduce((acc, item) => (acc += item), 0).toFixed(2);


  return (
    <>
    <h4>Your Balance</h4>
    <h1>₹{numberWithCommas(total2 - total)}</h1>
    </>
  )
}
