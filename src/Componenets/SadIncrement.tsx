import { memo } from 'react';
import type { FC } from 'react';
import { useDispatch } from 'react-redux';
import { sadCountIncrement } from '../actions';

type SadIncrementProps = {};

const SadIncrement: FC<SadIncrementProps> = () => {
    const dispatch = useDispatch();
    function increment() {
        dispatch(sadCountIncrement());
    }
    return (
        <div>
            <h3>Are u sad ?</h3>
            <button onClick={increment} className='bg-blue-700 px-2 py-1'>Yes</button>
        </div>
    );
};

export default memo(SadIncrement);
