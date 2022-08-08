import React from 'react';
import {TextField} from "@mui/material";

interface IJoinRoomInputs {
    isHost: boolean;
    roomId: string;
    setRoomId: React.Dispatch<React.SetStateAction<string>>;
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
}

const JoinRoomInputs: React.FC<IJoinRoomInputs> = ({roomId, setRoomId, name, setName, isHost}) => {
    return (
        <>
            {
                isHost ? (
                    <TextField
                        placeholder={'Enter meeting ID'}
                        value={roomId}
                        onChange={(e) => setRoomId(e.target.value)}
                        fullWidth={true}/>
                ) : null
            }
            <TextField
                placeholder={'Enter your Name'}
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth={true}
                margin={'dense'}/>
        </>
    );
};

export default JoinRoomInputs;
