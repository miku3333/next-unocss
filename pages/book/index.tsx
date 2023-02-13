import { memo, useState, useCallback, useEffect } from 'react';
import HeadBar from './components/HeadBar';

interface IBookProps {
    prop?: string;
}

const Book = ({ prop }: IBookProps) => {
    const [tempState, setTempState] = useState(1);
    const onClick = useCallback(() => {
        setTempState((tempState) => tempState + 1);
    }, []);
    useEffect(() => {
        console.log('tempState ===> ', tempState);
    }, [tempState]);

    return (
        <div onClick={onClick}>
            <div bg='red' color='#ffffff' text='55px'>
                111
            </div>
            {tempState}
            <HeadBar />
        </div>
    );
};

export default memo(Book);
