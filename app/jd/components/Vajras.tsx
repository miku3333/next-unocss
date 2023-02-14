import { IJDRes } from '@/service/jd';
import { memo } from 'react';
import Image from 'next/image';

interface IvajrasProps {
    data: IJDRes['vajras'];
}

const Vajras = ({ data }: IvajrasProps) => {
    const dataLists = [];
    let index = 0;
    while (data[index]) {
        dataLists.push(data.slice(index, index + 10));
        index += 10;
    }
    return (
        <div class='autox'>
            {dataLists.map((dataList) => (
                <div key={dataList[0].name} class='inlineFlex w100vw flex wrap'>
                    {dataList.map(({ img, name }) => (
                        <div key={name} class='inlineFlex column w20vw h20vw maxh106 acenter'>
                            <div class='flex1 por w100%'>
                                <Image style={{ objectFit: 'contain' }} alt='' src={img} fill />
                            </div>
                            <div class='fs12 lh18 mt6 #333'>{name}</div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default memo(Vajras);
