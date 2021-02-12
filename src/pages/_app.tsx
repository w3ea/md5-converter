import { FC } from 'react';
import type { AppProps } from 'next/app';
import '../assets/styles/main.scss';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Component {...pageProps} />
);

export default MyApp;