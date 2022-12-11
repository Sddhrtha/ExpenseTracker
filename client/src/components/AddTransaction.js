import React, { useState} from 'react'
import { AddExpenseTransaction } from './AddExpenseTransaction';
import { AddIncomeTransaction } from './AddIncomeTransaction';
import { AddSavingsTransaction } from './AddSavingsTransaction';


export const AddTransaction = () => {

  const [transaction, setTransaction] = useState('lund');

  return (
    <>
    <h1> Add a Transaction</h1>
    <hr />
    <div className='button-container'>
    <button id = "button1" className = {transaction === 'expense' ? "button selected" : "button"} type="button" onClick={() => { setTransaction('expense')}}>Expense</button>
    <button id = "button2" className = {transaction === 'income' ? "button selected" : "button"} type="button" onClick={() => { setTransaction('income')}}>Income</button>
    <button id = "button3" className = {transaction === 'savings' ? "button selected" : "button"} type="button" onClick={() => { setTransaction('savings')}}>Saving</button>

    {transaction == 'expense' ? <AddExpenseTransaction />
    : (transaction == 'income' ? <AddIncomeTransaction /> :
    (transaction == 'savings' ? <AddSavingsTransaction /> : <></>))}
    </div>
    </>
  )
}
