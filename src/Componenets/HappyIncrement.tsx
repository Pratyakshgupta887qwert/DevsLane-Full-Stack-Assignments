import { memo } from 'react';
import type { FC } from 'react';
import { useDispatch } from 'react-redux';
import { happyCountIncrement } from '../actions';

type HappyIncrementProps = {};

const HappyIncrement: FC<HappyIncrementProps> = () => {

    const dispatch = useDispatch();
    function increment() {
        dispatch(happyCountIncrement());
    }

    return (
        <div>
            <h3>Are u happy ?</h3>
            <button onClick={increment} className='bg-orange-700 px-2 py-1'>Yes</button>
        </div>
    );
};

export default memo(HappyIncrement);
