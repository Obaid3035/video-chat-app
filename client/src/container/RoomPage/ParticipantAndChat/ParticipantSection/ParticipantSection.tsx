import React from 'react';
import {Divider, Stack} from "@mui/material";
import Participant from "./Participant/Participant";

interface IParticipantSection {
    participants: {
        id: number,
        name: string
    }[]
}

const ParticipantSection: React.FC<IParticipantSection> = ({participants}) => {

    return (
        <Stack mt={4} divider={<Divider/>} px={2} py={1} borderRadius={3}
               bgcolor={'#fff'}>
            {
                participants.map(({id, name}) => (
                    <Participant key={id} name={name}/>
                ))
            }
        </Stack>
    );
};

export default ParticipantSection;
