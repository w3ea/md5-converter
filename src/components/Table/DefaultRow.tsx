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
                5a1c94d0b5eb2d18ef2ebce8adaab77b
            </span>
        </td>
    </tr>
);

export default DefaultRow;