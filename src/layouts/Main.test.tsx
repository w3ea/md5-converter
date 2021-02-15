import { render } from '@testing-library/react';
import Main from './Main';

describe('<Main />', () => {
    it('should match main layout snapshot', () => {
        const { asFragment } = render(<Main />);
        expect(asFragment()).toMatchSnapshot();
    });
});