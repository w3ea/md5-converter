import { FC } from 'react';
import { motion } from 'framer-motion';

type Props = {
    message?: string
}

const ErrorMessage: FC<Props> = ({ message }) => (
    <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
        exit={{ opacity: 0, y: -5, transition: { duration: 0.4 } }}
        className='absolute bottom-0 left-0 ml-2 mb-3 bg-white flex items-center space-x-1.5'
    >
        {/* Warning icon */}
        <svg className='w-3.5 fill-current text-red-600' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
            <path d='M501.609 384.603L320.543 51.265c-13.666-23.006-37.802-36.746-64.562-36.746-26.76 0-50.896 13.74-64.562 36.746-.103.176-.19.352-.293.528L10.662 384.076c-13.959 23.491-14.223 51.702-.719 75.457 13.535 23.769 37.919 37.948 65.266 37.948h360.544c27.347 0 52.733-14.179 66.267-37.948 13.504-23.754 13.241-51.967-.411-74.93zM225.951 167.148c0-16.586 13.445-30.03 30.03-30.03 16.586 0 30.03 13.445 30.03 30.03v120.121c0 16.584-13.445 30.03-30.03 30.03s-30.03-13.447-30.03-30.03V167.148zm30.03 270.273c-24.839 0-45.046-20.206-45.046-45.046 0-24.839 20.206-45.045 45.046-45.045 24.839 0 45.045 20.206 45.045 45.045.001 24.839-20.205 45.046-45.045 45.046z' />
        </svg>
        <p className='text-3.5 md:text-3.75 text-red-600'>
            {message}
        </p>
    </motion.div>
);

export default ErrorMessage;