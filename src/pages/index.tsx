import { FC } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import TableListSlice from '../store/tableListSlice';
import Form from '../components/Form';
import Table from '../components/Table';

const store = configureStore({ reducer: { tableList: TableListSlice } });

const Home: FC = () => (
    <Provider store={store}>
        <section className='pt-8 pb-20 flex flex-col space-y-20'>
            <Form />

            <Table />
        </section>
    </Provider>
);

export default Home;