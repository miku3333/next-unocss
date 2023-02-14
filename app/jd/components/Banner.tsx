'use client';
import { memo, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface IBannerProps {
    imgs: string[];
}

const Banner = ({ imgs }: IBannerProps) => {
    const bannerList = useRef<HTMLDivElement>(null);
    const activeRef = useRef(0);
    const [active, setActive] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            let next = (activeRef.current += 1);
            if (next === imgs.length + 1) {
                // bannerList.current?.children[0].scrollIntoView();
                next = activeRef.current = 1;
            }
            setActive(next);
            // bannerList.current?.children[next].scrollIntoView({ behavior: 'smooth' });
        }, 3000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <div class='h150 w100% por'>
            <div
                class='poa w150vw h100% t-44 z-1 centerx'
                style={{
                    backgroundImage: 'linear-gradient(0deg,#f1503b,#c82519 50%)',
                    borderBottomLeftRadius: '100%',
                    borderBottomRightRadius: '100%'
                }}></div>
            <div class='h100% autox nowrap' ref={bannerList}>
                {imgs.map((img) => (
                    <div key={img} class='h100% w100% px13 inlineBlock'>
                        <div class='w100% h100% por rd7 hidden'>
                            <Image alt='' src={img} fill />
                        </div>
                    </div>
                ))}
                <div class='h100% w100% px13 inlineBlock'>
                    <div class='w100% h100% por'>
                        <Image alt='' src={imgs[0]} fill />
                    </div>
                </div>
            </div>
            <div class='h5 w100% poa b10 flex jcenter'>
                {imgs.map((img, index) => (
                    <div key={img} class={`h5 w5 rd50% mx2 ${active === index ? 'bg#fa2c19' : 'bg#fff9'}`}></div>
                ))}
            </div>
        </div>
    );
};

export default memo(Banner);
