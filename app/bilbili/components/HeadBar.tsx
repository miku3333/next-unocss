import { memo } from 'react';
import Image from 'next/image';

interface IHeadBarProps {
    temp?: string;
}

const HeadBar = ({ temp }: IHeadBarProps) => {
    return (
        <div class='acenter flex h46'>
            <div class='por flex1 ml18'>
                <Image width={64} height={30} src='https://cdn.staticaly.com/gh/miku3333/image-hosting@master/b4f815305f8958f4c7b540d60682c8b6.v3csh33pso0.webp' alt='' />
            </div>
            <div class='w23 h23 mr23 por'>
                <Image fill src='/icon/search.svg' alt='' />
            </div>
            <div class='w25 h25 por mr12 rd50% hidden'>
                <Image fill src='https://cdn.staticaly.com/gh/miku3333/image-hosting@master/20221120/81689532_p0_master1200.6x9fnqz4hk40.webp' alt='' />
            </div>
        </div>
    );
};

export default memo(HeadBar);
