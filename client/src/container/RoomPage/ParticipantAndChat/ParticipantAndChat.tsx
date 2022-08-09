import React, {useState} from 'react';
import {Box, Divider} from "@mui/material";
import TabSection from "./TabSection/TabSection";
import ParticipantSection from "./ParticipantSection/ParticipantSection";
import ChatSection from "./ChatSection/ChatSection";

export enum TAB {
    CHAT = 'chat',
    PARTICIPANT = 'participant',
}

const ParticipantAndChat = () => {
    const [tab, setTab] = useState(TAB.PARTICIPANT)

    const participants = [
        {
            id: 1,
            name: 'Obaid'
        },
        {
            id: 2,
            name: 'Ali'
        },
        {
            id: 3,
            name: 'Haisam'
        },
        {
            id: 4,
            name: 'Ahad'
        }
    ]


    return (
        <Box bgcolor={'#EEF2F7'} borderRadius={8} p={4} height={'100%'}>
            <TabSection tab={tab} setTab={setTab}/>
            <Divider sx={{
                marginTop: '20px'
            }}/>
            {
                tab === TAB.PARTICIPANT ? (
                    <ParticipantSection participants={participants}/>
                ) : <ChatSection/>
            }
        </Box>
    );
};

export default ParticipantAndChat;
