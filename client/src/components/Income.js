import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Income = ({income}) => {
    const { deleteIncome, numberWithCommas } = useContext(GlobalContext);

    return (
      <li >
              {income.source} <span>₹{numberWithCommas(income.amount)}</span><button
              onClick ={() => deleteIncome(income._id)} className="delete-btn">x</button>
      </li>
    )
}
