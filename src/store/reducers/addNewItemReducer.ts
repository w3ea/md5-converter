import { PayloadAction } from '@reduxjs/toolkit';
import { TableItem } from '../../types/tableItem';
import createNewItem from '../../helpers/createNewItem';

type Payload = {
    originalText: string,
    MD5Hash: string
};

const addNewItemReducer = (state: TableItem[], { payload }: PayloadAction<Payload>): TableItem[] => {
    const newItem = createNewItem(payload.originalText, payload.MD5Hash);

    state = [newItem, ...state];
    return state;
};

export default addNewItemReducer;