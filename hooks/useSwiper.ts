import { useEffect, useRef, useState } from 'react';

const useSwiper = (length: number, timeout = 1000) => {
    const swiperRef = useRef<HTMLDivElement>(null);
    const activeRef = useRef(0);
    const [active, setActive] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            let next = (activeRef.current += 1);
            if (next === length + 1) {
                // swiperRef.current?.children[0]?.scrollIntoView();
                next = activeRef.current = 1;
            }
            setActive(next);
            // swiperRef.current?.children[next]?.scrollIntoView({ behavior: 'smooth' });
        }, timeout);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return [swiperRef, active] as const;
};

export default useSwiper;
