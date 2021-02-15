import { render, fireEvent, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';

import { configureStore, DeepPartial } from '@reduxjs/toolkit';
import Table from './Table';
import TableListSlice, { addNewItem } from '../../store/tableListSlice';
import { TableItem } from '../../types/tableItem';

window.confirm = jest.fn(() => true);

const preloaded: DeepPartial<{ tableList: TableItem[]; }> = {
    tableList: [
        {
            id: '31b28e4b-1bc2-40c4-a13c-ad3b6cad3297',
            originalText: 'foo',
            MD5Hash: 'acbd18db4cc2f85cedef654fccc4a4d8'
        },
        {
            id: 'c9319be5-e2b6-4b6e-b3b6-806e1af6e02a',
            originalText: 'bar',
            MD5Hash: '37b51d194a7513e45b56f6524f2d51f2'
        }
    ]
};

const store = configureStore({ reducer: { tableList: TableListSlice }, preloadedState: preloaded });

const renderTable = (): RenderResult => render(
    <Provider store={store}>
        <Table />
    </Provider>
);

describe('<Table />', () => {
    it('should match table snapshot', () => {
        const { asFragment } = renderTable();
        expect(asFragment()).toMatchSnapshot();
    });

    it('should add new item to table', () => {
        store.dispatch(addNewItem({ originalText: 'test', MD5Hash: 'acbd18db4cc2f85cedef654fccc4a4d8' }));

        const { getByText } = renderTable();

        expect(getByText('test')).toBeInTheDocument();
    });

    it('should add new item to the first row', () => {
        store.dispatch(addNewItem({ originalText: 'test', MD5Hash: 'acbd18db4cc2f85cedef654fccc4a4d8' }));

        const { getAllByTestId } = renderTable();

        const firstRowText = getAllByTestId('text')[0].textContent;

        expect(firstRowText).toBe('test');
    });

    it('should remove item from table', () => {
        const { getAllByTestId } = renderTable();

        const removeButton = getAllByTestId('remove-item-button')[0];
        fireEvent.click(removeButton);

        expect(window.confirm).toBeCalled();
    });
});