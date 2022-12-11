import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Saving = ({saving}) => {
    const { deleteSaving, numberWithCommas } = useContext(GlobalContext);

    return (
      <li >
              {saving.description} <span>₹{numberWithCommas(saving.amount)}</span><button
              onClick ={() => deleteSaving(saving._id)} className="delete-btn">x</button>
      </li>
    )
}
