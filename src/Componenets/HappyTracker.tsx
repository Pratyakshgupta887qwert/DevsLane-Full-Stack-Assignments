
import type { FC } from 'react';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectHappyCount } from '../selectors';

type HappyTrackerProps = {};

const HappyTracker: FC<HappyTrackerProps> = () => {
    const select = useSelector(selectHappyCount);
    return (
        <div className='bg-orange-700 px-8 py-4'>
            You were Happy {select} times
        </div>
    );
};


export default memo(HappyTracker);