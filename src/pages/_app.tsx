import { FC } from 'react';
import type { AppProps } from 'next/app';
import '../assets/styles/main.scss';
import Main from '../layouts/Main';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
    <Main>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
    </Main>
);

export default MyApp;