import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Income } from './Income';

export const IncomeList = () => {
    const {income, getIncomeList} = useContext(GlobalContext);

    useEffect(() => {
      getIncomeList();
    }, [income])
  
    return (
      <>
      <h3>Income</h3>
      <ul id="list" className="list">
          {income.map(income => (<Income key={income._id} income={income}/>))}
      </ul>
      </>
    )
}
