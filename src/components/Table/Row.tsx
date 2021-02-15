import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import cls from 'clsx';
import { removeItem } from '../../store/tableListSlice';
import { TableItem } from '../../types/tableItem';
import style from '../../assets/styles/components/table/column.module.scss';

const rowAnimate = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: 20, transition: { duration: 0.3 } }
};

type Props = {
    rowNumber: number,
    item: TableItem
};

const Row: FC<Props> = ({ rowNumber, item }) => {
    const dispatch = useDispatch();

    const onRemove = () => {
        // Check if we are in the client not server
        if (typeof window !== 'undefined') {
            window.confirm('Are you sure to delete this item?') && dispatch(removeItem(item.id)); // eslint-disable-line no-alert
        }
    };

    return (
        <motion.tr initial='hidden' animate='visible' exit='exit' variants={rowAnimate}>
            <td className={cls(style.column, style.column__number)} data-label='#'>
                <span>
                    {rowNumber}
                </span>
            </td>
            <td className={cls(style.column, style.column__text)} data-label='Text' data-testid='text'>
                <span>
                    {item.originalText}
                </span>
            </td>
            <td className={cls(style.column, style.column__md5)} data-label='MD5'>
                <span>
                    {item.MD5Hash}
                </span>
            </td>
            <td className={cls(style.column, style.column__action)} data-label='Action'>
                <div className='py-2.25 px-2 lg:py-3.5 lg:px-4 mx-auto'>
                    <button
                        data-testid='remove-item-button'
                        className='tw-table__row__remove-item'
                        type='button'
                        onClick={onRemove}
                        title='Remove item'
                    >
                        <svg className='w-5 md:w-5.5' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' />
                        </svg>
                        <p className='text-3.5 font-bold lg:hidden'>
                            Delete
                        </p>
                    </button>
                </div>
            </td>
        </motion.tr>
    );
};

export default Row;