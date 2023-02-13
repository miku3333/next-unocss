import { requestJD } from '@/service/jd';
import Content from './Content';

const Bilibili = async () => {
    const res = await requestJD();
    if (!res.success) {
        return res.message;
    }
    const { data } = res;
    return <Content data={data} />;
};

export default Bilibili;
