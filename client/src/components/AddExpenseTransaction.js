import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddExpenseTransaction = () => {

  const { addExpense } = useContext(GlobalContext);

  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');
  const [mode, setMode] = useState('');
  const [amount, setAmount] = useState(0);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      date: "2016-12-13T06:55:24.698Z",
      type,
      category,
      mode,
      description,
      amount: +amount
    }

    addExpense(newTransaction);
  }


  return (
    <>
    <h3>Add New Expense</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="type">Type</label>
          <input type="text" value={type} onChange = {(e) => setType(e.target.value)} placeholder="Type of Expense" />
        </div>
        <div className="form-control">
          <label htmlFor="category">Category</label>
          <input type="text" value={category} onChange = {(e) => setCategory(e.target.value)} placeholder="Choose Category" />
        </div>
        <div className="form-control">
          <label htmlFor="type">Mode</label>
          <input type="text" value={mode} onChange = {(e) => setMode(e.target.value)} placeholder="Mode of Payment" />
        </div>
        <div className="form-control">
          <label htmlFor="type">Description</label>
          <input type="text" value={description} onChange = {(e) => setDescription(e.target.value)} placeholder="Expense Description" />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount<br /></label>
          <input type="text" value={amount === 0 ? '' : amount} onChange = {(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add Expense</button>
      </form>
    </>
  )
}
