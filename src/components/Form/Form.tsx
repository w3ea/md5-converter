import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { addNewItem, tableListSelector } from '../../store/tableListSlice';
import MD5HashGenerator from '../../helpers/MD5HashGenerator';
import TextField from './TextField';
import SubmitButton from './SubmitButton';

type Input = {
    text: string
};

const schema = yup.object().shape({ text: yup.string().required('Text field cannot be empty').trim() });

const Form: FC = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const tableList = useSelector(tableListSelector);
    const { register, handleSubmit, errors, reset } = useForm<Input>({
        mode: 'onTouched',
        resolver: yupResolver(schema)
    });

    const onSubmit = handleSubmit(async ({ text }) => {
        if (loading) return false;

        setLoading(true);
        const { MD5Hash, error } = await MD5HashGenerator(tableList, text);

        if (error) {
            setLoading(false);
            return false;
        }

        reset();
        dispatch(addNewItem({ originalText: text, MD5Hash }));
        setLoading(false);
        return false;
    });

    return (
        <form className='tw-form' onSubmit={onSubmit}>
            <h1 className='mb-5 text-6 font-bold text-gray-800 text-center'>
                MD5 Converter
            </h1>

            <TextField register={register} errors={errors} onSubmit={onSubmit} />
            <SubmitButton loading={loading} />
        </form>
    );
};

export default Form;