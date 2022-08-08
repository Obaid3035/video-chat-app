import React, {useEffect} from 'react';
import {Box, Button, Stack, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../services/hook";
import {toggleIsHost} from "../../services/slices/room";

const Welcome = () => {
    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(toggleIsHost(false))
    }, [])

    return (
        <>
            <Box
                mb={15}
            >
                <Typography
                    variant={'h3'}
                    fontWeight={'bold'}
                    color={'#1D1F2E'}
                >
                    Logo
                </Typography>
            </Box>
            <Stack spacing={2}>
                <Button
                    onClick={() => navigate('/join-meeting?isHost=true')}
                    style={{
                        backgroundColor: '#1D1F2E'
                    }}
                    variant={'contained'}
                >
                    Host a meeting</Button>
                <Button
                    onClick={() => navigate('/join-meeting')}
                    style={{
                        color: '#1D1F2E',
                        borderColor: '#1D1F2E'
                    }}
                    color={'primary'}
                    variant={'outlined'}
                >
                    Join a meeting
                </Button>
            </Stack>
        </>
    );
};

export default Welcome;
