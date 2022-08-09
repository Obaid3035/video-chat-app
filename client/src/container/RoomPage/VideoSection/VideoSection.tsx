import React, {useState} from 'react';
import {Box, Stack} from "@mui/material";
import VideoButtons from "./VideoButtons/VideoButtons";

const VideoSection = () => {
    const [isMicOpen, setIsMicOpen] = useState(false)
    const [isVideoOpen, setIsVideoOpen] = useState(false)

    return (
        <Stack direction="column"
               justifyContent="space-between"
               alignItems="center"
               spacing={3}
               height={'100%'}
        >
            <Box>Video</Box>
            <VideoButtons
                isMicOpen={isMicOpen}
                setIsMicOpen={setIsMicOpen}
                isVideoOpen={isVideoOpen}
                setIsVideoOpen={setIsVideoOpen}
                />
        </Stack>
    );
};

export default VideoSection;
