import type { FC } from 'react';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectSadCount } from '../selectors';

type SadTrackerProps = {};

const SadTracker: FC<SadTrackerProps> = () => {
    const select = useSelector(selectSadCount);
    return (
        <div className='bg-blue-700 px-8 py-4'>
            You were Sad {select} times
        </div>
    );
};

export default memo(SadTracker);