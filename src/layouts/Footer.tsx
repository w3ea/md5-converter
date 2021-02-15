import { FC } from 'react';

const Footer: FC = () => (
    <footer className='bg-gray-700'>
        <div className='container flex justify-between items-center py-.5'>
            <p className='text-gray-300 text-3.5'>
                MD5 Converter
            </p>
            <div className='flex items-center'>
                <span className='text-4.5 text-gray-300'>&#169;</span>
                <span className='ml-.5 text-3.5 text-gray-300'>2021</span>
            </div>
        </div>
    </footer>
);

export default Footer;