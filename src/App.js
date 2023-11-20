import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { themeSettings } from 'theme';
import Dashboard from 'scenes/dashboard';
import Layout from 'scenes/layout';
import Products from 'components/Product';

function App() {
	const mode = useSelector((state) => state.global.mode);
	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
	return (
		<div className="app">
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					{/* The CssBaseline provides CSS reset style. 
					It resets the default style given to HTML elements across different browser. 
					Al alternative is the normalize.css */}
					<Routes>
						<Route element={<Layout />}>
							<Route
								path="/"
								element={<Navigate to={'/dashboard'} replace />}
							/>
							<Route path="/dashboard" element={<Dashboard />} />
							<Route path="/products" element={<Products />} />
						</Route>
					</Routes>
				</ThemeProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
