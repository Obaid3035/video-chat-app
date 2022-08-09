import React from 'react';
import {Grid} from "@mui/material";
import VideoSection from "./VideoSection/VideoSection";
import ParticipantAndChat from "./ParticipantAndChat/ParticipantAndChat";

const RoomPage = () => {
    return (
        <Grid container spacing={2} p={3} height={'100vh'}>
            <Grid item xs={8}>
                <VideoSection/>
            </Grid>
            <Grid item xs={4}>
                <ParticipantAndChat/>
            </Grid>
        </Grid>
    );
};

export default RoomPage;
