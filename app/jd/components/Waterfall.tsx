import { memo } from 'react';
import Image from 'next/image';
import { IJDRes } from '@/service/jd';

interface IWaterfallProps {
    data: IJDRes['goodsList'];
}

const WaterItem = memo(({ data }: { data: IJDRes['goodsList'][number] }) => {
    const { title, img, value, lowDay, remarkCount, favorableRate, jdLogistics, selfSupport, jdSuperMarket, seckill, fullDiscount, numberDiscount } = data;
    const [integer, float] = `${value.toFixed(2)}`.split('.');
    let bottomInfo = '';
    if (remarkCount) {
        const count = remarkCount >= 10000 ? `${Math.floor(remarkCount / 10000)}万+` : remarkCount;
        bottomInfo = `${count}条评论`;
    } else if (favorableRate) {
        bottomInfo = `${favorableRate}%好评率`;
    }

    let discountInfo = '';
    if (numberDiscount) {
        const [number, discount] = numberDiscount;
        discountInfo = `满${number}减${discount}`;
    } else if (fullDiscount) {
        const [number, discount] = fullDiscount;
        discountInfo = `${number}件${discount}折`;
    } else if (seckill) {
        discountInfo = '秒杀';
    }
    return (
        <div class='p5'>
            <div class='rd8 hidden bg#fff'>
                <div class='w100% pb100% por mb5'>
                    <Image alt='' fill src={img} />
                </div>
                <div class='p10 pt0'>
                    <div class='tilte ellipsis2 #434343 fs14 lh22'>
                        {jdSuperMarket && (
                            <div class='inlineBlock' style={{ transform: 'translateY(3px)' }}>
                                <Image
                                    class='mr6'
                                    alt=''
                                    width={45}
                                    height={16}
                                    src='https://cdn.staticaly.com/gh/miku3333/image-hosting@master/710369802b423cd8.29ksxuk5l800.webp'
                                />
                            </div>
                        )}
                        {title}
                    </div>
                    {lowDay && (
                        <div class='h26 flex acenter'>
                            <Image width={12} height={12} alt='' src='https://cdn.staticaly.com/gh/miku3333/image-hosting@master/588b8392ae283444.528h54kpisw0.webp' />
                            <div class='#ff2078 fs12 lh18 pl2 bgrgba(255,32,120,0.07)'>{lowDay}天最低价</div>
                        </div>
                    )}
                    <div class='h32 flex #ff4142 fs14 acenter'>
                        <div class=''>¥</div>
                        <div class='fs20'>{integer}</div>
                        <div class=''>.{float}</div>
                        {discountInfo && (
                            <div
                                style={{
                                    background: numberDiscount
                                        ? 'url(https://cdn.staticaly.com/gh/miku3333/image-hosting@master/db1efce584d923c2.6ho3axyo5nw0.webp) no-repeat'
                                        : '',
                                    backgroundSize: '100% 100%'
                                }}
                                class={`fs12 lh18 ml6 nowrap ${!numberDiscount ? 'bd#ff4142 px5' : 'pl10 pr5'}`}>
                                {discountInfo}
                            </div>
                        )}
                    </div>
                    <div class='flex acenter h20'>
                        {selfSupport ? (
                            <Image
                                class='mr6'
                                alt=''
                                width={25}
                                height={15}
                                src='https://cdn.staticaly.com/gh/miku3333/image-hosting@master/b90967cc602f446a.6fenu0esaeo0.webp'
                            />
                        ) : jdLogistics ? (
                            <Image
                                class='mr6'
                                alt=''
                                width={45}
                                height={15}
                                src='https://cdn.staticaly.com/gh/miku3333/image-hosting@master/0fc800d7ec49c0cd.12knk1pnsvhc.webp'
                            />
                        ) : null}
                        {bottomInfo && <div class='fs12 #999 nowrap'>{bottomInfo}</div>}
                        <div class='flex1'></div>
                        <div class='bg#f2f2f2 #000 fs12 lh20 px8 rd10 nowrap'>看相似</div>
                    </div>
                </div>
            </div>
        </div>
    );
});

const Waterfall = ({ data }: IWaterfallProps) => {
    const dataL = data.filter((_, index) => index % 2 === 0);
    const dataR = data.filter((_, index) => index % 2 === 1);
    return (
        <div class='p5 pb57 autoy bg#f7f7f7 '>
            <div class='w50% inlineBlock vertical-top'>
                {dataL.map((item) => (
                    <WaterItem key={item.title} data={item} />
                ))}
            </div>
            <div class='w50% inlineBlock vertical-top'>
                {dataR.map((item) => (
                    <WaterItem key={item.title} data={item} />
                ))}
            </div>
        </div>
    );
};

export default memo(Waterfall);
