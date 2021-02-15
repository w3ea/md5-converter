import { store } from '../../pages';
import { addNewItem } from '../tableListSlice';

it('should add new item to TableList', () => {
    let state = store.getState().tableList;
    expect(state).toHaveLength(0);

    store.dispatch(addNewItem({ originalText: 'foo', MD5Hash: 'acbd18db4cc2f85cedef654fccc4a4d8' }));
    state = store.getState().tableList;
    expect(state).toHaveLength(1);

    store.dispatch(addNewItem({ originalText: 'bar', MD5Hash: '37b51d194a7513e45b56f6524f2d51f2' }));
    state = store.getState().tableList;
    expect(state).toHaveLength(2);
});