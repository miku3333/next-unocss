'use client';
import { memo, useCallback, useEffect, useState } from 'react';
import { useActive, useDrop } from '../Content';
import Image from 'next/image';
import { marcoTask } from '@/utils';

interface ITagDropProps {
    tags: string[];
}

const TagDrop = ({ tags }: ITagDropProps) => {
    const { visable, close } = useDrop();
    const { active, onTagClick } = useActive();
    const stop = useCallback((e: any) => e.stopPropagation(), []);
    // useEffect(() => {
    //     if (visable) {
    //         setDisplay('block');
    //         return;
    //     }
    //     marcoTask(() => {
    //         setDisplay('none');
    //     }, 300);
    // }, [visable]);

    return (
        // prettier-ignore
        <div 
            onClick={visable ? close : undefined}
            style={visable 
                ? { 
                    background: 'rgba(0,0,0,.3)',
                    pointerEvents: 'auto'
                }
                : {
                    background: 'rgba(0,0,0,0)',
                    pointerEvents: 'none'
                }
            } 
            class='pof w100% h100% t0 trans-all-.3 noClick hidden z1'
        >
            <div onClick={stop} style={{top: visable ? 0 : '-100%'}} class='p20 pt10 flex wrap bg#fff por trans-top-.3 canClick'>
                {tags.map((tag, index) => (
                    <div key={tag} onClick={onTagClick(index)} class={`nowrap m8 fs14 lh19 ${active === index ? '#fb7299' : '#757575'}`} >{tag}</div>
                ))}
                <div onClick={close} class='w21 h21 centerx b2'>
                    <Image fill src='/icon/up.svg' alt='' />
                </div>
            </div>
        </div>
    );
};

export default memo(TagDrop);
