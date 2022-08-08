import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./container/Welcome/Welcome";
import JoinMeeting from "./container/JoinMeeting/JoinMeeting";
import BoxLayout from "./component/BoxLayout";

function App() {
    return (
        <Router>
            <Routes>

                <Route path={'/'} element={<BoxLayout/>}>
                    <Route path={'/join-meeting'} element={<JoinMeeting/>} />
                    <Route path={'/'} element={<Welcome/>}>
                </Route>

                </Route>
            </Routes>
        </Router>
    );
}

export default App;
