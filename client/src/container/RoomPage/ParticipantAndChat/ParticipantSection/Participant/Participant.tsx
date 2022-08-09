import React from 'react';
import {Avatar, Box, Typography} from "@mui/material";

interface IParticipant {
    name: string,
}

const Participant: React.FC<IParticipant> = ({name}) => {
    return (
        <Box display={'flex'} my={2} alignItems={'center'} justifyContent={'space-between'}>
            <Box display={'flex'} alignItems={'center'}>
                <Avatar>
                    {name.charAt(0).toUpperCase()}
                </Avatar>
                <Typography ml={3} fontSize={17}>{name}</Typography>
            </Box>
            <Typography color={'#70e561'}>●</Typography>
        </Box>
    );
};

export default Participant;
