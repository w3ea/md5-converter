import { FC } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import TableListSlice from '../store/tableListSlice';
import Form from '../components/Form';
import Table from '../components/Table';

export const store = configureStore({ reducer: { tableList: TableListSlice } });

const Home: FC = () => (
    <Provider store={store}>
        <div className='pt-2 md:pt-5 lg:pt-8 pb-20 flex flex-col space-y-18 md:space-y-20'>
            <Form />

            <Table />
        </div>
    </Provider>
);

export default Home;