import { PayloadAction } from '@reduxjs/toolkit';
import { TableItem } from '../../types/tableItem';

const setTableListReducer = (state: TableItem[], { payload }: PayloadAction<TableItem[]>): TableItem[] => {
    state = payload;
    return state;
};

export default setTableListReducer;