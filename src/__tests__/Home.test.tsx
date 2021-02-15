import { render } from '@testing-library/react';
import Index from '../pages/index';

describe('<Index />', () => {
    it('should render home page elements', () => {
        const { getByText } = render(<Index />);

        expect(getByText('MD5 Converter')).toBeInTheDocument();
        expect(getByText('MD5')).toBeInTheDocument();
        expect(getByText('Welcome to MyMd5Converter. Use the form above to get started')).toBeInTheDocument();
        expect(getByText('5a1c94d0b5eb2d18ef2ebce8adaab77b')).toBeInTheDocument();
    });

    it('should match home page snapshot', () => {
        const { asFragment } = render(<Index />);
        expect(asFragment()).toMatchSnapshot();
    });
});