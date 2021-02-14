import { v4 as uuidv4 } from 'uuid';
import { TableItem } from '../types/tableItem';

const createNewItem = (originalText: string, MD5Hash: string): TableItem => ({
    id: uuidv4(),
    originalText,
    MD5Hash
});

export default createNewItem;