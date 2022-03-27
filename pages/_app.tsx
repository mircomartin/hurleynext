import type { AppProps } from 'next/app';

import { CssBaseline, ThemeProvider } from '@mui/material';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={}>
			<CssBaseline />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
