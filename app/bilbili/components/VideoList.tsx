'use client';
import { IBiliListRes } from '@/service/bilibili';
import { memo } from 'react';
import Image from 'next/image';

interface IVideoListProps {
    videos: IBiliListRes['videos'];
}

const VideoList = ({ videos }: IVideoListProps) => {
    return (
        <div class='autoy px5 flex wrap'>
            {videos.map(({ coverUrl, play, danmu, title }) => (
                <div key='title' class='p8-5 w50%'>
                    <div class='w100% pb56% por'>
                        <Image fill alt='' src={coverUrl} />
                        <div class='p6-5  poa b0 h28 w100% flex #fff fs12 lh18' style={{ background: 'linear-gradient(0deg,rgba(0,0,0,.85),transparent)' }}>
                            <Image style={{ marginRight: 5 }} width={17} height={17} alt='' src='/icon/play.svg' />
                            {play}
                            <div class='flex1'></div>
                            <Image style={{ marginRight: 5 }} width={17} height={17} alt='' src='/icon/danmu.svg' />
                            {danmu}
                        </div>
                    </div>
                    <div class='ellipsis2 mt6 fs12 lh16 #212121'>{title}</div>
                </div>
            ))}
        </div>
    );
};

export default memo(VideoList);
