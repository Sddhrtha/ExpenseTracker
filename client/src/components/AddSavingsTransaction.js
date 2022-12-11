import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddSavingsTransaction = () => {
    const { addSaving } = useContext(GlobalContext);

    const [description , setDescription] = useState('');
    const [amount, setAmount] = useState(0);
  
    const onSubmit = e => {
      e.preventDefault();
  
      const newTransaction = {
        date: "2016-12-13T06:55:24.698Z",
        description,
        amount: +amount
      }
  
      addSaving(newTransaction);
      setDescription('');
      setAmount(0);
    }
  
  
    return (
      <>
      <h3>Add Saving</h3>
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label htmlFor="type">Description</label>
            <input type="text" value={description} onChange = {(e) => setDescription(e.target.value)} placeholder="Description" />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount<br /></label>
            <input type="text" value={amount === 0 ? '' : amount} onChange = {(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
          </div>
          <button className="btn">Add Savings</button>
        </form>
      </>
    )
}
