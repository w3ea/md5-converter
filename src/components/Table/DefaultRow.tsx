import { FC } from 'react';
import cls from 'clsx';
import style from '../../assets/styles/components/table/column.module.scss';

const DefaultRow: FC = () => (
    <tr>
        <td className={cls(style.column, style.column__text)} data-label='Text'>
            <span>
                Welcome to MyMd5Converter. Use the form above to get started
            </span>
        </td>
        <td className={cls(style.column, style.column__md5)} data-label='MD5'>
            <span>
                f5c4a3b160d818bdb8e0190b9041ba44
            </span>
        </td>
    </tr>
);

export default DefaultRow;