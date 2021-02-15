import { FC, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { addNewItem, tableListSelector, setTableList } from '../../store/tableListSlice';
import MD5HashGenerator from '../../helpers/MD5HashGenerator';
import TextField from './TextField';
import SubmitButton from './SubmitButton';
import { getFromLocal, saveToLocal } from '../../helpers/localStorage';

type Input = {
    text: string
};

const schema = yup.object().shape({ text: yup.string().required('Text field cannot be empty').trim() });

const Form: FC = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const tableList = useSelector(tableListSelector);
    const didMount = useRef(false);
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
        dispatch(addNewItem({ originalText: text, MD5Hash: MD5Hash || '' }));
        setLoading(false);
        return false;
    });

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
        <form data-testid='convert-form' className='tw-form' onSubmit={onSubmit}>
            <h1 className='mb-4 md:mb-5 text-5.5 md:text-6 font-bold text-gray-800 text-center'>
                MD5 Converter
            </h1>

            <TextField register={register} errors={errors} onSubmit={onSubmit} />
            <SubmitButton loading={loading} />
        </form>
    );
};

export default Form;