import { render } from '@testing-library/react';
import Index from '../pages/index';

describe('<Index />', () => {
    it('should render home page elements', () => {
        const { getByText } = render(<Index />);

        expect(getByText('MD5 Converter')).toBeInTheDocument();
        expect(getByText('MD5')).toBeInTheDocument();
        expect(getByText('Welcome to MyMd5Converter. Use the form above to get started')).toBeInTheDocument();
        expect(getByText('f5c4a3b160d818bdb8e0190b9041ba44')).toBeInTheDocument();
    });

    it('should match home page snapshot', () => {
        const { asFragment } = render(<Index />);
        expect(asFragment()).toMatchSnapshot();
    });
});