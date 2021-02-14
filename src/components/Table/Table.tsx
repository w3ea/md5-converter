import { FC, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { tableListSelector, setTableList } from '../../store/tableListSlice';
import { getFromLocal, saveToLocal } from '../../helpers/localStorage';
import TableHead from './TableHead';
import DefaultRow from './DefaultRow';
import Row from './Row';
import style from '../../assets/styles/components/table/table.module.scss';

const Table: FC = () => {
    const dispatch = useDispatch();
    const tableList = useSelector(tableListSelector);
    const didMount = useRef(false);
    const existUserList = tableList.length > 0;

    // region get and save tableList to localStorage
    useEffect(() => {
        dispatch(setTableList(getFromLocal()));
    }, [dispatch]);
    useEffect(() => {
        if (didMount.current) {
            saveToLocal(tableList);
        } else {
            didMount.current = true;
        }
    }, [tableList]);
    // endregion

    return (
        <div className='tw-table'>
            <table className={style.table}>
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