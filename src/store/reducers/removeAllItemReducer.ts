import { initialState } from '../tableListSlice';
import { TableItem } from '../../types/tableItem';

const removeAllItemReducer = (state: TableItem[]): TableItem[] => {
    state = initialState;
    return state;
};

export default removeAllItemReducer;