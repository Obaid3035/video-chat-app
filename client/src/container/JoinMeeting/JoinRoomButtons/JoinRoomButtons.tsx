import React from 'react';
import {IJoinRoom} from "../JoinMeeting";
import {Box, Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

const JoinRoomButtons: React.FC<IJoinRoom> = ({ isHost }) => {
    const title = isHost ? 'Host' : 'Join';
    const navigation = useNavigate();
    return (
        <Box display={'flex'} justifyContent={'right'}>
            <Button
                style={{
                    backgroundColor: '#1D1F2E',
                    margin: '0 15px'
                }}
                variant={'contained'}
            >{title}</Button>
            <Button
                onClick={() => navigation('/')}
                variant={'outlined'}
            >Cancel</Button>
        </Box>
    );
};

export default JoinRoomButtons;
