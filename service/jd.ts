import request from '.';

export interface IJDRes {
    search: string;
    banners: string[];
    vajras: {
        img: string;
        name: string;
    }[];
    scrolls: {
        img: string;
        value: number;
    }[];
    goodsList: {
        img: string;
        title: string;
        value: number;
        lowDay?: number;
        jdLogistics?: boolean;
        remarkCount?: number;
        favorableRate?: number;
        selfSupport: boolean;
        seckill?: boolean;
        jdSuperMarket?: boolean;
        fullDiscount?: [number, number];
        numberDiscount?: [number, number];
    }[];
}

export const requestJD = async () => {
    const res = await request<IJDRes>({
        url: '/jd',
        method: 'post',
        headers: {
            'Cache-Control': 'no-cache'
        }
    });
    return res;
};
