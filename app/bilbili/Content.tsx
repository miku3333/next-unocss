'use client';
import { IBiliListRes } from '@/service/bilibili';
import { memo, useCallback, useEffect, useState } from 'react';
import HeadBar from './components/HeadBar';
import TagList from './components/TagList';
import constate from 'constate';
import TagDrop from './components/TagDrop';
import { marcoTask } from '@/utils';
import VideoList from './components/VideoList';

export const [DropProvider, useDrop, useOpenDrop, useActive] = constate(
    () => {
        const [visable, setVisable] = useState(false);
        const close = useCallback(() => setVisable(false), []);
        const open = useCallback(() => setVisable(true), []);
        const [active, setActive] = useState(0);
        const onTagClick = useCallback(
            (index: number) => () => {
                setActive(index);
                close();
            },
            []
        );
        return { visable, open, close, active, setActive, onTagClick };
    },
    ({ visable, close }) => ({ visable, close }),
    ({ open }) => open,
    ({ active, onTagClick }) => ({ active, onTagClick })
);

interface IContentProps {
    data: IBiliListRes;
}

const Content = ({ data }: IContentProps) => {
    const { tags, videos } = data;
    return (
        <div class='h100vh w100vw flexc pof '>
            <HeadBar />
            <div class='flex1 fRoot flexc hiddeny'>
                <DropProvider>
                    <TagList tags={tags} />
                    <TagDrop tags={tags} />
                    <VideoList videos={videos} />
                </DropProvider>
            </div>
        </div>
    );
};

export default memo(Content);
