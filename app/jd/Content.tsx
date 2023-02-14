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
import Vajras from './components/Vajras';
import Seckill from './components/Seckill';
import BottomBar from './components/BottomBar';
import FixBottom from './components/FixBottom';
import Waterfall from './components/Waterfall';

interface IContentProps {
    data: IJDRes;
}

const Content = ({ data }: IContentProps) => {
    const { search, banners, vajras, scrolls, goodsList } = data;
    return (
        <div class='h100vh autoy hiddenx'>
            <OpenApp />
            <TitleBar search={search} />
            <Banner imgs={banners} />
            <Vajras data={vajras} />
            <Seckill data={scrolls} />
            <BottomBar />
            <FixBottom />
            <Waterfall data={goodsList} />
        </div>
    );
};

export default memo(Content);
