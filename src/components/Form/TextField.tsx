import { FC, KeyboardEvent } from 'react';
import { AnimatePresence } from 'framer-motion';
import { UseFormMethods } from 'react-hook-form';
import cls from 'clsx';
import Tooltip from './Tooltip';
import ErrorMessage from './ErrorMessage';

type Props = Partial<Pick<UseFormMethods, 'register' | 'errors'>> & {
    onSubmit: () => Promise<void>
};

const TextField: FC<Props> = ({ register, errors, onSubmit }) => {
    const handleUserKeyPress = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (! event.shiftKey && event.key === 'Enter') {
            event.preventDefault();
            return onSubmit();
        }

        return false;
    };

    return (
        <div className='relative flex-grow'>
            <label htmlFor='text' className='text-3.75 text-gray-500 ml-1.5 leading-7'>
                Text
            </label>
            <textarea
                data-testid='text'
                ref={register}
                id='text'
                name='text'
                className={cls('tw-form__text-field', { 'tw-form__text-field--error': errors?.text })}
                onKeyPress={handleUserKeyPress}
                required
            />
            <AnimatePresence>
                {errors?.text && <ErrorMessage message={errors.text.message} />}
            </AnimatePresence>

            <Tooltip />
        </div>
    );
};

export default TextField;