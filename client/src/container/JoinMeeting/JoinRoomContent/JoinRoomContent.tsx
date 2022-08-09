import React, {useState} from 'react';
import JoinRoomInputs from "./JoinRoomInputs/JoinRoomInputs";
import JoinRoomRadio from "./JoinRoomInputs/JoinRoomRadio";
import ErrorMessage from "../../../component/ErrorMessage";
import {getRoomExists} from "../../../api/room";
import JoinRoomButtons from "./JoinRoomButtons/JoinRoomButtons";
import CircularProgress from '@mui/material/CircularProgress';
import {Box} from "@mui/material";
import {useNavigate} from "react-router-dom";

interface IJoinRoomContent {
    isHost: boolean,
}

const JoinRoomContent: React.FC<IJoinRoomContent> = ({isHost}) => {
    const navigation = useNavigate();
    const [roomId, setRoomId] = useState('');
    const [name, setName] = useState('');
    const [audio, setAudio] = useState(false);
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    const handleJoinRoom = async () => {
        try {
            setErrorMessage('')
            if (isHost) {
                if (name.length === 0) {
                    setErrorMessage('All fields are required')
                    return;
                }
                await createRoom()
            } else {
                if (name.length === 0 || roomId.length === 0) {
                    setErrorMessage('All fields are required')
                    return;
                }
                await joinRoom();
            }
        } catch (e: any) {
            setLoading(false)
            setErrorMessage(e.response.data.message)
        }
    }

    const joinRoom = async () => {
        setLoading(true)
        const responseMessage = await getRoomExists(roomId);
        setLoading(false)
        const {roomExists, full} = responseMessage;
        if (roomExists) {
            if (full) {
                setErrorMessage('Room is full')
            } else {
                // Join
            }
        } else {
            setErrorMessage('Meeting not found check your meeting id.')
        }
    }

    const createRoom = async () => {
        navigation('/room')
    }


    return (

        <>
            {errorMessage ? <ErrorMessage message={errorMessage}/> : null}
            <Box my={3} height={200} display={'flex'} justifyContent={'center'} flexDirection={'column'}>
                {
                    !loading ? (
                            <>
                                <JoinRoomInputs
                                    isHost={isHost}
                                    roomId={roomId}
                                    setRoomId={setRoomId}
                                    name={name}
                                    setName={setName}
                                />
                                <JoinRoomRadio
                                    audio={audio}
                                    setAudio={setAudio}
                                />
                                <JoinRoomButtons isHost={isHost} handleJoinRoom={handleJoinRoom}/>
                            </>
                    ) : (
                        <Box textAlign={'center'}>
                            <CircularProgress color={'success'} />
                        </Box>
                    )
                }
            </Box>
        </>
    );
};

export default JoinRoomContent;
