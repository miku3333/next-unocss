'use client';
import { memo, useCallback, useState } from 'react';
import Image from 'next/image';

interface IBottomBarProps {}

const config = [
    {
        name: '首页',
        icon: 'icon/apple.svg',
        activeIcon: 'icon/appleActive.svg'
    },
    {
        name: '分类',
        icon: 'icon/all.svg',
        activeIcon: 'icon/allActive.svg'
    },
    {
        name: '购物车',
        icon: 'icon/car.svg',
        activeIcon: 'icon/carActive.svg'
    },
    {
        name: '未登录',
        icon: 'icon/avatar.svg',
        activeIcon: 'icon/avatarActive.svg'
    }
];

const BottomBar = ({}: IBottomBarProps) => {
    const [active, setActive] = useState(0);
    const onClick = useCallback(
        (index: number) => () => {
            setActive(index);
        },
        []
    );

    return (
        <div class='h52 w100vw pof b0 bg#fff flex z1'>
            {config.map(({ name, icon, activeIcon }, index) => {
                const isActive = active === index;
                return (
                    <div onClick={onClick(index)} class='flex1 inlineFlex column acenter jcenter'>
                        <Image width={20} height={20} alt='' src={isActive ? activeIcon : icon} />
                        <div class={`fs10 ${isActive ? '#ff2727' : '#8b8b8b'}`}>{name}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default memo(BottomBar);
