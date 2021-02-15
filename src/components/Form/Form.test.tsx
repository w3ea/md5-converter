import { render, fireEvent, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../pages';
import Form from './Form';

window.alert = jest.fn(() => true);

const renderForm = (): RenderResult => render(
    <Provider store={store}>
        <Form />
    </Provider>
);

describe('<Form />', () => {
    it('should match form snapshot', () => {
        const { asFragment } = renderForm();
        expect(asFragment()).toMatchSnapshot();
    });

    it('should display a blank form', () => {
        const { getByTestId } = renderForm();

        expect(getByTestId('convert-form')).toHaveFormValues({ text: '' });
    });

    it('should able to change textarea value', () => {
        const { getByTestId } = renderForm();

        const textarea = getByTestId('text') as HTMLTextAreaElement;

        fireEvent.change(textarea, { target: { value: 'test' } });

        expect(textarea.value).toBe('test');
    });

    it('should display form error on empty field submit', async () => {
        const { getByTestId, findByTestId } = renderForm();

        fireEvent.click(getByTestId('submit-button'));

        expect(await findByTestId('form-error')).toBeInTheDocument();
    });
});