import { memo, useState } from 'react';
import Image from 'next/image';
import { IJDRes } from '@/service/jd';
import dayjs from 'dayjs';

interface ISeckillProps {
    data: IJDRes['scrolls'];
}

const Seckill = ({ data }: ISeckillProps) => {
    return (
        <div class='m10'>
            <div class='h36 flex acenter por'>
                <Image alt='' fill src='https://cdn.staticaly.com/gh/miku3333/image-hosting@master/seckillBg.13tgeaun0rpc.webp' />
                <div class='#333 fs14 ml10 mr5'>京东秒杀</div>
                <div class='#ff2727 fs13 ml5'>{dayjs().hour()}</div>
                <div class='w21 h18 por mr5'>
                    <Image alt='' fill src='https://cdn.staticaly.com/gh/miku3333/image-hosting@master/seckill-time-to_1de70c91.411yfmpae5k0.webp' />
                </div>
                <span style={{ background: 'linear-gradient(-140deg,#ff6152,#fa2c19);' }} class='fs12 rd4 h18 lh18 hidden #fff'>
                    01
                </span>
                <div class='#ff2727'>:</div>
                <span style={{ background: 'linear-gradient(-140deg,#ff6152,#fa2c19);' }} class='fs12 rd4 h18 lh18 hidden #fff'>
                    02
                </span>
                <div class='#ff2727'>:</div>
                <span style={{ background: 'linear-gradient(-140deg,#ff6152,#fa2c19);' }} class='fs12 rd4 h18 lh18 hidden #fff'>
                    03
                </span>
                <div class='flex1'></div>
                <div class='fs12 inlineBlock'>爆款轮番秒</div>
                <div class='w22 por'>
                    <Image class='center' width={12} height={12} alt='' src='/icon/rightCircle.svg' />
                </div>
            </div>
            <div class='p10-6 autox w100%'>
                {data.map(({ img, value }) => (
                    <div class='w60 h80 inlineFlex column acenter'>
                        <div class='flex1 por w100%'>
                            <Image alt='' fill src={img} />
                        </div>
                        <div class='#f2270c fs13'>¥{value.toFixed(1)}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default memo(Seckill);
