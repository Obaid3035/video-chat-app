import React from 'react';
import {Box, Button, Stack, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Welcome = () => {
    const navigate = useNavigate();
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
                    Join a meeting</Button>
                <Button
                    onClick={() => navigate('/join-meeting')}
                    style={{
                        color: '#1D1F2E',
                        borderColor: '#1D1F2E'
                    }}
                    color={'primary'}
                    variant={'outlined'}
                >
                    Host a meeting
                </Button>
            </Stack>
        </>
    );
};

export default Welcome;
