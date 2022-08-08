import React from 'react';
import {Typography} from "@mui/material";
import {IJoinRoom} from "../JoinMeeting";


const JoinRoomTitle: React.FC<IJoinRoom>  = ({ isHost }) => {

    const title = isHost ? 'Host a meeting' : 'Join a meeting';

    return (
        <Typography
            variant="h4"
            fontWeight={'bold'}
        >
            { title }
        </Typography>
    );
};

export default JoinRoomTitle;
