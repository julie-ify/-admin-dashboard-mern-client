import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
// globaReducer is an alias for globalSlice. We could name it anything since its a default export.
import globalReducer from 'state'; // The jsconfig allows us to use 'state' instead of './state'. This is called relative path ie
// without the './'. with the './' its called absolute path
import { Provider } from 'react-redux';

const store = configureStore({
	reducer: {
		global: globalReducer,
	},
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
