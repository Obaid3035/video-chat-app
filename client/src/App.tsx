import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Welcome from "./container/Welcome/Welcome";
import JoinMeeting from "./container/JoinMeeting/JoinMeeting";
import BoxLayout from "./component/BoxLayout";
import RoomPage from "./container/RoomPage/RoomPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path={'/'} element={<BoxLayout/>}>
                    <Route path={'/join-meeting'} element={<JoinMeeting/>}/>
                    <Route path={'/'} element={<Welcome/>}/>
                </Route>
                <Route path={'/room'} element={<RoomPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
