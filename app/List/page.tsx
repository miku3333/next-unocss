"use client";
import {memo, useState, useCallback, useEffect} from 'react';

const List = () => {
    const [tempState, setTempState] = useState(1);
    const onClick = useCallback(() => {
        setTempState(tempState => tempState + 1);
    }, []);
    useEffect(() => {
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    }, [tempState]);

    return (
        <div onClick={onClick}>
            <div w='250' bg='#fcc' color='blue' text='55px'>
                111
            </div>
            {tempState}
        </div>
    );
};

export default memo(List);
