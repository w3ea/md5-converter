import { store } from '../../pages';
import { removeAllItem, setTableList } from '../tableListSlice';
import createNewItem from '../../helpers/createNewItem';

it('should remove all item from TableList', () => {
    let state = store.getState().tableList;
    expect(state).toHaveLength(0);

    const firstItem = createNewItem('foo', 'acbd18db4cc2f85cedef654fccc4a4d8');
    const secondItem = createNewItem('bar', '37b51d194a7513e45b56f6524f2d51f2');

    store.dispatch(setTableList([firstItem, secondItem]));
    state = store.getState().tableList;
    expect(state).toHaveLength(2);

    store.dispatch(removeAllItem());
    state = store.getState().tableList;
    expect(state).toHaveLength(0);
});