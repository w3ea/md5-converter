import { createSlice } from '@reduxjs/toolkit';
// region Reducers
import setTableListReducer from './reducers/setTableListReducer';
import removeAllItemReducer from './reducers/removeAllItemReducer';
import addNewItemReducer from './reducers/addNewItemReducer';
import removeItemReducer from './reducers/removeItemReducer';
// endregion
import { TableItem } from '../types/tableItem';

export const initialState: TableItem[] = [];

const tableListSlice = createSlice({
    name: 'tableList',
    initialState,
    reducers: {
        setTableList: setTableListReducer,
        removeAllItem: removeAllItemReducer,
        addNewItem: addNewItemReducer,
        removeItem: removeItemReducer
    }
});

export const tableListSelector = (state: {tableList: TableItem[]}): TableItem[] => state.tableList;
export const { setTableList, addNewItem, removeItem, removeAllItem } = tableListSlice.actions;
export default tableListSlice.reducer;