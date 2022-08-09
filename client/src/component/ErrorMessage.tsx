import React from 'react';
import {Alert} from "@mui/material";

interface IErrorMessage {
    message: string
}

const ErrorMessage: React.FC<IErrorMessage> = ({ message }) => {
    return <Alert sx={{
        marginTop: '20px'
    }} severity="error">{ message }</Alert>
};

export default ErrorMessage;
