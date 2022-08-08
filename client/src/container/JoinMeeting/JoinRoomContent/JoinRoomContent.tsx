import React, {useState} from 'react';
import JoinRoomInputs from "./JoinRoomInputs/JoinRoomInputs";
import JoinRoomRadio from "./JoinRoomInputs/JoinRoomRadio";
import ErrorMessage from "../../../component/ErrorMessage";

interface IJoinRoomContent {
    isHost: boolean,
}

const JoinRoomContent: React.FC<IJoinRoomContent> = ({isHost}) => {
    const [roomId, setRoomId] = useState('');
    const [name, setName] = useState('');
    const [audio, setAudio] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)

    const handleJoinRoom = async () => {
        console.log('joining')
    }


    return (

        <>
            {errorMessage ? <ErrorMessage message={errorMessage}/> : null}
            <form style={{
                margin: '10px 0'
            }}>

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
            </form>
        </>
    );
};

export default JoinRoomContent;
