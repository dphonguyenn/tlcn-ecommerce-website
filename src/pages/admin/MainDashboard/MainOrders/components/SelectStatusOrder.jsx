import { statusOrder } from '~/utils/index';
import { useState } from 'react';

export const SelectStateOrder = props => {
  const { type } = props;
  const [state,setState] =useState(type)
  const listState = Object.keys(statusOrder);
  return (
    <>
      <select value={state} name={statusOrder?.[type]} onChange={(e)=>{setState(e.target.value)}} >
        {listState?.map(s => {
            return (
            <option value={s}>{statusOrder?.[s]}</option>
            )
        })}
      </select>
    </>
  );
};


