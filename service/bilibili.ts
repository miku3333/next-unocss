import { IBilibili } from '@/types/mock';
import request from '.';

export interface IBiliListRes {
    tags: string[];
    videos: {
        coverUrl: string;
        play: number;
        danmu: number;
        title: string;
    }[];
}

export const requestBiliList = async () => {
    const res = await request<IBiliListRes>({
        url: '/bilibili',
        method: 'post',
        headers: {
            'Cache-Control': 'no-cache'
        }
    });
    return res;
};
