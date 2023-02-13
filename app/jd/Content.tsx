'use client';
import { IBiliListRes } from '@/service/bilibili';
import { memo, useCallback, useEffect, useState } from 'react';
import constate from 'constate';
import { marcoTask } from '@/utils';
import { IJDRes } from '@/service/jd';
import Image from 'next/image';
import OpenApp from './components/OpenApp';
import TitleBar from './components/TitleBar';
import Banner from './components/Banner';

interface IContentProps {
    data: IJDRes;
}

const Content = ({ data }: IContentProps) => {
    const { search, banners } = data;
    return (
        <div>
            <OpenApp />
            <TitleBar search={search} />
            <Banner imgs={banners} />
        </div>
    );
};

export default memo(Content);
