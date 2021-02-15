import { store } from '../../pages';
import { removeItem, setTableList } from '../tableListSlice';
import createNewItem from '../../helpers/createNewItem';

it('should remove item from TableList', () => {
    let state = store.getState().tableList;
    expect(state).toHaveLength(0);

    const newItem = createNewItem('test', '098f6bcd4621d373cade4e832627b4f6');

    store.dispatch(setTableList([newItem]));
    state = store.getState().tableList;
    expect(state).toHaveLength(1);

    store.dispatch(removeItem(newItem.id));
    state = store.getState().tableList;
    expect(state).toHaveLength(0);
});