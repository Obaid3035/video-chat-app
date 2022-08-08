import React from 'react';
import {Checkbox, FormControlLabel} from "@mui/material";

interface IJoinRoomRadio {
    audio: boolean;
    setAudio: React.Dispatch<React.SetStateAction<boolean>>;
}

const JoinRoomRadio: React.FC<IJoinRoomRadio> = ({ audio, setAudio }) => {
    return (
        <FormControlLabel
            style={{
                marginTop: '20px'
            }}
            control={
                <Checkbox
                    defaultChecked
                    value={audio}
                    onChange={(e) => setAudio(!e.target.checked)}
                />
            } label={'Only audio'}/>
    );
};

export default JoinRoomRadio;
