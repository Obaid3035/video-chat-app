import axios from "../utils/axios";

export interface IGetRoomExistsResponse {
    roomExists: boolean;
    full: boolean;
}

export const getRoomExists = async (roomId: string): Promise<IGetRoomExistsResponse> => {
    const response = await axios.get(`/room-exists/${roomId}`)
    return response.data
}
