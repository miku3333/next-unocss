'use client';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useActive, useOpenDrop } from '../Content';

interface ITagListProps {
    tags: string[];
}

const TagList = ({ tags }: ITagListProps) => {
    const openDrop = useOpenDrop();
    const { active, onTagClick } = useActive();
    const [anchorLeft, setAnchorLeft] = useState(0);
    const tagListRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const activeTag = tagListRef.current?.children[active] as HTMLDivElement;
        const { offsetLeft, offsetWidth } = activeTag;
        setAnchorLeft(offsetLeft + offsetWidth / 2);
        activeTag.scrollIntoView({ behavior: 'smooth', inline: 'end', block: 'end' });
    }, [active]);

    return (
        <div class='flex'>
            <div ref={tagListRef} class='autox nowrap por flex1'>
                {tags.map((tag, index) => (
                    <div key={tag} onClick={onTagClick(index)} class={`inlineBlock px16 h42 lh42 fs14 ${index === active ? '#fb7299' : '#505050'} trans-color`}>
                        {tag}
                    </div>
                ))}
                <div style={{ left: anchorLeft, transform: 'translateX(-50%)' }} class='w30 h2 bg#fb7299 poa b0 trans-left'></div>
            </div>
            <div onClick={openDrop} class='w42 por'>
                <div class='w21 h21 center'>
                    <Image fill src='/icon/down.svg' alt='' />
                </div>
            </div>
        </div>
    );
};

export default memo(TagList);
