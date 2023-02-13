import { memo } from 'react';
import Image from 'next/image';

interface ITitleBarProps {
    search?: string;
}

const TitleBar = ({ search }: ITitleBarProps) => {
    return (
        <div class='pos t0 flex h44 acenter fs14 bg#e43130'>
            <div class='w50 h100% por'>
                <Image class='center' alt='' width={18} height={20} src='/icon/hamburger.svg' />
            </div>
            <div class='flex1 h30 rd15 bg#fff flex acenter'>
                <Image class='ml15 mr8' alt='' width={20} height={15} src='/icon/qq.svg' />
                <Image class='px5 bdl#ddd' alt='' width={18} height={15} src='/icon/search.svg' />
                <div class='flex1 ml5 #888 fs12'>{search}</div>
            </div>
            <div class='w50 tcenter lh14 #fff'>登录</div>
        </div>
    );
};

export default memo(TitleBar);
