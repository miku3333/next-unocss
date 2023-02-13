import { requestBiliList } from '@/service/bilibili';
import Content from './Content';

const Bilibili = async () => {
    const res = await requestBiliList();
    if (!res.success) {
        return res.message;
    }
    const { data } = res;
    return <Content data={data} />;
};

export default Bilibili;
