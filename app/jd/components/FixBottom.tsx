import { memo, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import useSwiper from '@/hooks/useSwiper';

interface IFixBottomProps {}

const FixBottom = ({}: IFixBottomProps) => {
    const [visable, setVisable] = useState(true);
    const [swiperRef, active] = useSwiper(2, 2000);

    return visable ? (
        <div
            style={{ background: 'url(https://cdn.staticaly.com/gh/miku3333/image-hosting@master/a6772680a123d8e3.36k2zdu5ck20.webp)', backgroundSize: '100%' }}
            class='pof b80 centerx h40 w185 flex z1'>
            <div onClick={() => setVisable(false)} class='w44'></div>
            <div class='flex1'></div>
            <div class='w100 h100% autoy #fff fs13' ref={swiperRef}>
                <div class='h100% lh40'>打开京东app</div>
                <div class='h100% lh40'>购物更轻松</div>
                <div class='h100% lh40'>打开京东app</div>
            </div>
        </div>
    ) : null;
};

export default memo(FixBottom);
