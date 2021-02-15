import { FC } from 'react';
import Header from './Header';
import Footer from './Footer';

const Main: FC = ({ children }) => (
    <div className='flex flex-col min-h-screen'>
        <Header />

        <main className='mt-8 container flex-1'>
            {children}
        </main>

        <Footer />
    </div>
);

export default Main;