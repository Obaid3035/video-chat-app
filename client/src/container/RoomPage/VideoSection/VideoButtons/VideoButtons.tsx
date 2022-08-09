import React from 'react';
import {Avatar, Box} from "@mui/material";
import {CallEnd, Mic, MicOff, Videocam, VideocamOff} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";

interface IVideoButtons {
    isMicOpen: boolean;
    setIsMicOpen: React.Dispatch<React.SetStateAction<boolean>>
    isVideoOpen: boolean;
    setIsVideoOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const VideoButtons: React.FC<IVideoButtons> = ({ isVideoOpen, setIsVideoOpen, isMicOpen, setIsMicOpen }) => {

    const navigation = useNavigate();


    const avatarStyle = {
        backgroundColor: '#fff',
        cursor: 'pointer',
        padding: '6px',
        boxShadow: '-3px 1px 23px -16px rgba(0,0,0,1)'
    }

    const iconStyle = {
        fontSize: '28px'
    }
    return (
        <Box
            bgcolor={'#EEF2F7'}
            borderRadius={3}
            p={4}
            mx={3}
            width={'80%'}
            height={'40px'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
        >
            <Box>
                <Avatar sx={avatarStyle} onClick={() => setIsMicOpen(!isMicOpen)}
                >
                    {
                        isMicOpen ? <Mic sx={iconStyle} color={'primary'}/> :
                            <MicOff sx={iconStyle} color={'action'}/>
                    }
                </Avatar>
            </Box>
            <Box mx={3}>
                <Avatar sx={avatarStyle} onClick={() => navigation('/', {replace: true})}>
                    <CallEnd sx={iconStyle} color={'error'}/>
                </Avatar>
            </Box>
            <Box>
                <Avatar sx={avatarStyle} onClick={() => setIsVideoOpen(!isVideoOpen)}
                >
                    {
                        isVideoOpen ? <Videocam sx={iconStyle} color={'primary'}/> :
                            <VideocamOff sx={iconStyle} color={'action'}/>
                    }
                </Avatar>
            </Box>
        </Box>
    );
};

export default VideoButtons;
