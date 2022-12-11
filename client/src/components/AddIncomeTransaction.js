import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddIncomeTransaction = () => {

  const { addIncome } = useContext(GlobalContext);

  const [source, setSource] = useState('');
  const [amount, setAmount] = useState(0);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      date: "2016-12-13T06:55:24.698Z",
      source,
      amount: +amount
    }

    addIncome(newTransaction);
    setSource('');
    setAmount(0);
  }


  return (
    <>
    <h3>Add Income</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="type">Source</label>
          <input type="text" value={source} onChange = {(e) => setSource(e.target.value)} placeholder="Source" />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount<br /></label>
          <input type="text" value={amount === 0 ? '' : amount} onChange = {(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add Income</button>
      </form>
    </>
  )
}
