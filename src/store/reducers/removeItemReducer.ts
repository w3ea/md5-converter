import { PayloadAction } from '@reduxjs/toolkit';
import { TableItem } from '../../types/tableItem';

const removeItemReducer = (state: TableItem[], { payload }: PayloadAction<string>): TableItem[] => {
    state = state.filter(item => item.id !== payload);

    return state;
};

export default removeItemReducer;