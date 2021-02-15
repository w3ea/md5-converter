import { FC } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../assets/styles/main.scss';
import Main from '../layouts/Main';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
    <>
        <Head>
            <title>MD5 Converter</title>
            <meta charSet='utf-8' />
            <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
            <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
            <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
            <link rel='manifest' href='/site.webmanifest' />
            <meta name='msapplication-TileColor' content='#da532c' />
            <meta name='theme-color' content='#ffffff' />
            <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
            <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1' />
        </Head>
        <Main>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
        </Main>
    </>
);

export default MyApp;