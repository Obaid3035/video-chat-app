import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {Box} from "@mui/material";
import {toggleIsHost} from "../../services/slices/room";
import {useAppDispatch, useAppSelector} from "../../services/hook";
import JoinRoomContent from "./JoinRoomContent/JoinRoomContent";
import JoinRoomTitle from "./JoinRoomTitle/JoinRoomTitle";

export interface IJoinRoom {
    isHost: boolean,
    handleJoinRoom?: () => void,
}

const JoinMeeting = () => {
    const [searchParams] = useSearchParams();
    const isHost = useAppSelector(state => state.room.isHost);
    const dispatch = useAppDispatch();


    useEffect(() => {
        const isHostQuery = searchParams.get('isHost')
        if (isHostQuery) {
            dispatch(toggleIsHost(isHostQuery))
        }
    }, [])


    return (
        <Box
            width={'80%'}
        >
            <JoinRoomTitle isHost={isHost}/>
            <JoinRoomContent isHost={isHost}/>
        </Box>
    );
};

export default JoinMeeting;
