'use client';
import { memo, useState } from 'react';
import Image from 'next/image';

const OpenApp = () => {
    const [visable, setVisable] = useState(true);
    return visable ? (
        <div class='h45 bg#333 flex acenter #fff fs14'>
            <div onClick={() => setVisable(false)} class='w32 por'>
                <Image class='center' width={10} height={10} src='/icon/close.svg' alt='' />
            </div>
            <div class='w39 h100% por'>
                <Image
                    class='center'
                    width={30}
                    height={30}
                    src='https://cdn.staticaly.com/gh/miku3333/image-hosting@master/5b850ecaN644d2983.23w71mawmgzk.webp'
                    alt=''
                />
            </div>
            <div class='flex1 tcenter lh14'>打开京东App，购物更轻松</div>
            <div class='w98 h45 lh45 bg#F63515 tcenter'>立即打开</div>
        </div>
    ) : null;
};

export default memo(OpenApp);
