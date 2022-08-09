import React from 'react';
import ReactDOM from 'react-dom/client';
import {createTheme, ThemeProvider} from '@mui/material/styles'
import {Provider} from "react-redux";
import {store} from "./services/store";
import './index.css';
import App from './App';

const theme = createTheme({
    typography: {
        fontFamily: ['montserrat', 'Roboto'].join(',')
    }
})

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </Provider>
);


/*
    TODO
    1 =>
 */
