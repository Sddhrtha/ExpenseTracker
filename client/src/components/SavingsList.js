import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Saving } from './Saving';

export const SavingsList = () => {
    const {savings, getSavings} = useContext(GlobalContext);

    useEffect(() => {
      getSavings();
    }, [savings])
  
    return (
      <>
      <h3>Savings</h3>
      <ul id="list" className="list">
          {savings.map(saving => (<Saving key={saving._id} saving={saving}/>))}
      </ul>
      </>
    )
}
