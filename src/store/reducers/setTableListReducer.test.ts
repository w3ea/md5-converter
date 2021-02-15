import { store } from '../../pages';
import { setTableList } from '../tableListSlice';
import createNewItem from '../../helpers/createNewItem';

it('should set new items to TableList', () => {
    let state = store.getState().tableList;
    expect(state).toHaveLength(0);

    const newItem = createNewItem('test', '098f6bcd4621d373cade4e832627b4f6');

    store.dispatch(setTableList([newItem]));
    state = store.getState().tableList;
    expect(state).toHaveLength(1);

    const newStateItem = state[0];
    expect(newStateItem).toMatchInlineSnapshot(
        newStateItem,
        `
            Object {
              "MD5Hash": "098f6bcd4621d373cade4e832627b4f6",
              "id": "${newItem.id}",
              "originalText": "test",
            }
       `
    );

    expect(newStateItem).toEqual(newItem);
});