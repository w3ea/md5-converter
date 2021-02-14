import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { removeAllItem } from '../../store/tableListSlice';
import style from '../../assets/styles/components/table/column.module.scss';

type Props = {
    existUserList: boolean
};

const TableHead: FC<Props> = ({ existUserList }) => {
    const dispatch = useDispatch();

    const onRemoveAll = () => {
        // Check if we are in the client not server
        if (typeof window !== 'undefined') {
            window.confirm('Are you sure to delete all items?') && dispatch(removeAllItem()); // eslint-disable-line no-alert
        }
    };

    return (
        <thead className='lg:bg-gray-800 lg:border-b lg:border-blue-100'>
            <tr className='hidden lg:flex w-full'>
                {existUserList && (
                    <th className={style.column__number}>
                        #
                    </th>
                )}
                <th className={style.column__text}>
                    Text
                </th>
                <th className={style.column__md5}>
                    MD5
                </th>
                {existUserList && (
                    <th className={style.column__action}>
                        <button
                            className='tw-table__head__remove-all-button'
                            type='button'
                            onClick={onRemoveAll}
                            title='Remove all'
                        >
                            <svg className='w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' />
                            </svg>
                        </button>
                    </th>
                )}
            </tr>
        </thead>
    );
};

export default TableHead;