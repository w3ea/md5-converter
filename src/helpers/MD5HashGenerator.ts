import { TableItem } from '../types/tableItem';
import fetchMD5 from '../API/fetchMD5';

type GeneratorType = {
    error?: boolean,
    MD5Hash?:string,
};
const MD5HashGenerator = async (tableList: TableItem[], text: string): Promise<GeneratorType> => {
    const itemAlreadyExist = tableList.find(item => item.originalText === text);

    if (itemAlreadyExist) {
        return { MD5Hash: itemAlreadyExist.MD5Hash };
    }

    const data = await fetchMD5(text);

    if (! data.success) {
        return { error: true };
    }

    return { MD5Hash: data.hash };
};

export default MD5HashGenerator;