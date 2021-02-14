import { TableItem } from '../types/tableItem';

const initialValue: TableItem[] = [];
const TABLE_LIST = 'tableList';

export const getFromLocal = (): TableItem[] => {
    try {
        if (typeof window !== 'undefined') {
            const item = window.localStorage.getItem(TABLE_LIST);
            return item ? JSON.parse(item) : initialValue;
        }

        return initialValue;
    } catch (error) {
        console.log(error);
        return initialValue;
    }
};

export const saveToLocal = (tableList: TableItem[]): void => {
    try {
        // Check if we are in the client not server
        if (typeof window !== 'undefined') {
            window.localStorage.setItem(TABLE_LIST, JSON.stringify(tableList));
        }
    } catch (error) {
        console.log(error);
    }
};