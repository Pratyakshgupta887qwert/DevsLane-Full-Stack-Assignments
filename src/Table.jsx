import React,{ useState } from 'react';
import Tablesetup from './Tablesetup.jsx';

function Table(){
    const state = useState(2);
    const num = state[0];
    const updateNum = state[1];

    function nextTable(){
        updateNum(num+1);
    }
    return(
        <>
        <div className='p-2'>
      <button onClick={nextTable} className='rounded-md px-4 py-1 bg-indigo-700 text-white'>Next</button>
      <Tablesetup number={num} index={1} />
      <Tablesetup number={num} index={2} />
      <Tablesetup number={num} index={3} />
      <Tablesetup number={num} index={4} />
    </div>
        </>
    );
}
export default Table;