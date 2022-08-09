import React from 'react';
import {TAB} from "../ParticipantAndChat";
import {Box, Button, ButtonGroup, Typography} from "@mui/material";

interface ITabSection {
    tab: TAB,
    setTab: React.Dispatch<React.SetStateAction<TAB>>
}

const TabSection: React.FC<ITabSection> = ({ tab, setTab }) => {
    return (
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
            <Typography fontSize={17} fontWeight={'bold'}>{ tab === TAB.CHAT ? 'Group Chat' : 'Participant'}</Typography>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button color={'primary'} style={{
                    backgroundColor: tab === TAB.PARTICIPANT ? '#EEF2F7' : '',
                    color: '#000'
                }} onClick={() => setTab(TAB.CHAT)}
                >Messages</Button>
                <Button style={{
                    backgroundColor: tab === TAB.CHAT ? '#EEF2F7' : '',
                    color: '#000'
                }} onClick={() => setTab(TAB.PARTICIPANT)}
                >Participant</Button>
            </ButtonGroup>
        </Box>
    );
};

export default TabSection;
