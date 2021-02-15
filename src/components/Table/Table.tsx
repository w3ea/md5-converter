import { FC } from 'react';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { tableListSelector } from '../../store/tableListSlice';
import TableHead from './TableHead';
import DefaultRow from './DefaultRow';
import Row from './Row';
import style from '../../assets/styles/components/table/table.module.scss';

const Table: FC = () => {
    const tableList = useSelector(tableListSelector);
    const existUserList = tableList.length > 0;

    return (
        <div className='tw-table'>
            <table className={style.table} summary='The table list of converted text contains the row number, text, md5, and action (delete item) columns'>
                <TableHead existUserList={existUserList} />
                <tbody>

                    {existUserList && (
                        <AnimatePresence initial={false}>
                            {tableList?.map((item, index) => (
                                <Row key={item.id} item={item} rowNumber={index + 1} />
                            ))}
                        </AnimatePresence>
                    )}

                    {! existUserList && <DefaultRow />}
                </tbody>
            </table>
        </div>
    );
};

export default Table;