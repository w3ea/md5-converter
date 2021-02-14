import { createSlice } from '@reduxjs/toolkit';
import { TableItem } from '../types/tableItem';
import createNewItem from '../helpers/createNewItem';

const initialState: TableItem[] = [];

const tableListSlice = createSlice({
    name: 'tableList',
    initialState,
    reducers: {
        setTableList: (state, { payload }) => {
            state = payload;
            return state;
        },
        removeAllItem: state => {
            state = initialState;
            return state;
        },
        addNewItem: (state, { payload }) => {
            const newItem = createNewItem(payload.originalText, payload.MD5Hash);

            state = [newItem, ...state];
            return state;
        },
        removeItem: (state, { payload }) => {
            state = state.filter(item => item.id !== payload);

            return state;
        }
    }
});

export const tableListSelector = (state: {tableList: TableItem[]}): TableItem[] => state.tableList;
export const { setTableList, addNewItem, removeItem, removeAllItem } = tableListSlice.actions;
export default tableListSlice.reducer;